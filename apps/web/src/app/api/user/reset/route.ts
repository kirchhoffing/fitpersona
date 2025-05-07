import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@fitpersona/database/src/client';

// POST: Reset user data
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

    // Delete the user's profile
    await prisma.profile.delete({
      where: { userId: session.user.id },
    }).catch(e => {
      // If profile doesn't exist, that's fine
      console.log('No profile to delete');
    });
    
    // Delete any workouts
    await prisma.workout.deleteMany({
      where: { userId: session.user.id },
    });
    
    // Create a new profile with default values and hasVisitedDashboard set to false
    await prisma.profile.create({
      data: {
        userId: session.user.id,
        gender: 'male',
        birthYear: new Date().getFullYear() - 30, // Default age of 30
        height: 175, // Default height in cm
        weight: 70, // Default weight in kg
        goal: 'maintain_fitness',
        activityLevel: 'sedentary',
        workoutLocation: 'home',
        hasVisitedDashboard: false
      }
    }).catch(e => {
      console.error('Error creating default profile:', e);
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
