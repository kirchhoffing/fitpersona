import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@fitpersona/database/src/client';

// POST: Reset the user's profile and onboarding status
export async function POST() {
  try {
    // Get the current user's session
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Delete the user's profile data
    await prisma.profile.deleteMany({
      where: { userId }
    });

    // Create a new blank profile with required fields and default values
    await prisma.profile.create({
      data: {
        userId,
        gender: 'male', // Default gender
        birthYear: new Date().getFullYear() - 30, // Default age of 30
        height: 170, // Default height in cm
        weight: 70, // Default weight in kg
        goal: 'lose_weight', // Default goal
        activityLevel: 'sedentary', // Default activity level
        workoutLocation: 'home', // Default workout location
        hasVisitedDashboard: false // Reset the dashboard visit status
      }
    });

    // Also clear any localStorage items that might be storing user data
    // This is handled on the client side when this endpoint is called

    return NextResponse.json({ 
      success: true,
      message: 'Your profile has been reset'
    });
  } catch (error) {
    console.error('Error resetting user profile:', error);
    return NextResponse.json(
      { 
        error: 'Failed to reset profile',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
