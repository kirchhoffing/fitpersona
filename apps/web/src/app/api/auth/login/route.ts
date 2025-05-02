import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import * as bcrypt from 'bcryptjs'; // Import bcryptjs instead of bcrypt
import { sign } from 'jsonwebtoken';

// This route should not be used directly anymore.
// We're keeping it for backwards compatibility but redirecting to NextAuth
// which handles database validation properly.

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = loginSchema.parse(body);

    // STRICT DATABASE VALIDATION
    // Find user by email in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Log authentication attempt for debugging
    console.log(`Login attempt for email: ${email}`);
    
    if (!user) {
      console.log(`User not found in database: ${email}`);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password against database hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log(`Invalid password for user: ${email}`);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    console.log(`User authenticated successfully: ${email}`);

    // We're no longer setting a separate JWT token
    // This avoids conflicting with NextAuth session
    
    return NextResponse.json(
      { 
        message: 'Login successful',
        redirectTo: '/api/auth/signin/credentials',
        user: {
          id: user.id,
          email: user.email
        }
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }

    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 