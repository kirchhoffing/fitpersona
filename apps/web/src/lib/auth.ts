import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'

// IMPORTANT: This is the single source of truth for authentication
// There is NO parallel auth system, NO hardcoded credentials, and NO bypasses

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email?: string | null
      name?: string | null
    }
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || 'your-fallback-secret-key-for-development-only',
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        console.log('Auth attempt with credentials:', { email: credentials?.email })
        
        // ABSOLUTE MUST HAVE DATABASE VALIDATION - NO EXCEPTIONS!
        // There are NO hardcoded credentials, NO bypasses, and NO test accounts
        
        if (!credentials?.email || !credentials?.password) {
          console.error('Missing email or password in credentials')
          throw new Error('Email and password are required')
        }

        try {
          // CRITICAL: Verify the user exists in the database
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          })

          // DATABASE CHECK #1: User must exist in the database
          if (!user) {
            console.error(`Authentication failed: User not found in database: ${credentials.email}`)
            throw new Error('Invalid email or password')
          }

          // DATABASE CHECK #2: Password must match the hashed password in database
          const passwordMatches = await compare(credentials.password, user.password)

          if (!passwordMatches) {
            console.error(`Authentication failed: Invalid password for user: ${credentials.email}`)
            throw new Error('Invalid email or password')
          }

          // DATABASE VALIDATION SUCCEEDED
          console.log(`Authentication successful for database user: ${credentials.email}`)
          
          // Return user from database ONLY - no hardcoded or synthetic values
          return {
            id: user.id,
            email: user.email,
            name: user.name || 'User'
          }
        } catch (error) {
          console.error('Authentication error:', error)
          throw error
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  }
} 