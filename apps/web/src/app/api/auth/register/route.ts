import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { z } from 'zod'

// Define validation schema
const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()
    console.log('Registration request received:', { 
      name: body.name, 
      surname: body.surname, 
      email: body.email, 
      hasPassword: !!body.password 
    })
    
    // Validate input data
    let validatedData
    try {
      validatedData = registerSchema.parse(body)
    } catch (validationError) {
      console.error('Validation failed:', validationError)
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { 
            error: 'Invalid input data', 
            details: validationError.errors.map(err => ({
              field: err.path.join('.'),
              message: err.message
            }))
          },
          { status: 400 }
        )
      }
      throw validationError
    }
    
    const { name, surname, email, password } = validatedData
    console.log('Validation passed for user:', { name, surname, email })

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      console.log('Registration failed: Email already in use', email)
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    try {
      // Create user
      const user = await prisma.user.create({
        data: {
          name,
          surname,
          email,
          password: hashedPassword,
        },
      })
      
      console.log('User created successfully:', { id: user.id, email: user.email })
      
      return NextResponse.json(
        { message: 'User created successfully' },
        { status: 201 }
      )
    } catch (dbError) {
      console.error('Database error during user creation:', dbError)
      return NextResponse.json(
        { error: 'Failed to create user account', details: 'Database error' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Unexpected registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 