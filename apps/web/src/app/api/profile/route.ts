import { NextResponse } from 'next/server'
import { onboardingSchema } from '@/schemas/onboardingSchema'
import { prisma } from '@fitpersona/database/src/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    // Validate the incoming data
    const validatedData = onboardingSchema.parse(body)

    // Save to database
    const profile = await prisma.profile.create({
      data: {
        userId: session.user.id,
        gender: validatedData.gender,
        birthYear: validatedData.birthYear,
        height: validatedData.height,
        weight: validatedData.weight,
        goal: validatedData.goal,
        activityLevel: validatedData.activityLevel,
        equipment: validatedData.equipment,
        dietaryPreferences: validatedData.dietaryPreferences,
        // Add any additional fields as needed
      },
    })

    return NextResponse.json(
      { message: 'Profile created successfully', profile },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating profile:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
} 