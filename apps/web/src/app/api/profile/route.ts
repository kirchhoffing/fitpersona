import { NextResponse } from 'next/server'
import { prisma } from '@fitpersona/database'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Define the expected request body type
type ProfileData = {
  gender: 'male' | 'female' | 'other'
  birthYear: number
  height: number
  weight: number
  fitnessGoals: string[]
  activityLevel: string
  availableEquipment: string[]
  dietaryPreferences: string[]
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } })
  if (!profile) {
    return NextResponse.json(null, { status: 204 })
  }
  return NextResponse.json(profile)
}

export async function POST(req: Request) {
  try {
    // Get the current user's session
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Parse and validate the request body
    const body = await req.json() as ProfileData

    // Create or update the user's profile
    const profile = await prisma.profile.upsert({
      where: {
        userId: session.user.id,
      },
      update: {
        gender: body.gender,
        birthYear: body.birthYear,
        height: body.height,
        weight: body.weight,
        goal: body.fitnessGoals[0], // Using first goal since schema expects single string
        activityLevel: body.activityLevel,
        equipment: body.availableEquipment.join(','), // Converting array to string
        dietaryPreferences: body.dietaryPreferences.join(','), // Converting array to string
      },
      create: {
        userId: session.user.id,
        gender: body.gender,
        birthYear: body.birthYear,
        height: body.height,
        weight: body.weight,
        goal: body.fitnessGoals[0],
        activityLevel: body.activityLevel,
        equipment: body.availableEquipment.join(','),
        dietaryPreferences: body.dietaryPreferences.join(','),
      },
    })

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error creating/updating profile:', error)
    return NextResponse.json(
      { error: 'Failed to create/update profile' },
      { status: 500 }
    )
  }
}