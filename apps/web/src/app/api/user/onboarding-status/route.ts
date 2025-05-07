import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { hasCompletedOnboarding } from '@/lib/userUtils';
import { prisma } from '@fitpersona/database/src/client';

// GET: Check if user has completed onboarding and visited dashboard
export async function GET() {
  try {
    // Get the current user's session
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if the user has completed onboarding
    const completed = await hasCompletedOnboarding(session.user.id);
    
    // Get the hasVisitedDashboard flag from the profile
    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
      select: { hasVisitedDashboard: true }
    });

    return NextResponse.json({ 
      completed, 
      visitedDashboard: !!profile?.hasVisitedDashboard 
    });
  } catch (error) {
    console.error('Error checking onboarding status:', error);
    return NextResponse.json(
      { error: 'Failed to check onboarding status' },
      { status: 500 }
    );
  }
}

// POST: Mark that the user has visited the dashboard
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

    // First, check if there's already a profile for this user ID
    const existingProfile = await prisma.profile.findUnique({
      where: { userId: session.user.id }
    });
    
    let updatedProfile;
    
    if (existingProfile) {
      // Profile exists, just update the hasVisitedDashboard field
      console.log(`Found profile for user ${session.user.id}. Marking dashboard as visited.`);
      
      updatedProfile = await prisma.profile.update({
        where: { userId: session.user.id },
        data: { hasVisitedDashboard: true },
      });
    } else {
      // Instead of creating a default profile with incorrect data, we'll check if the user has a proper profile first
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: { profile: true }
      });
      
      if (user && !user.profile) {
        console.log(`User ${session.user.id} exists but has no profile. Returning status to let frontend handle it.`);
        // We'll let the front-end handle creating the profile with proper onboarding data
        return NextResponse.json({
          success: true,
          hasVisitedDashboard: false,
          profileExists: false
        });
      } else {
        console.warn(`No user or profile found for userId ${session.user.id}. User might need to reauthenticate.`);
        return NextResponse.json({
          success: false,
          error: 'User record not found',
          hasVisitedDashboard: false
        }, { status: 404 });
      }
    }
    
    return NextResponse.json({ 
      success: true,
      hasVisitedDashboard: updatedProfile.hasVisitedDashboard 
    });
  } catch (error) {
    // More detailed error logging
    console.error('Error marking dashboard as visited:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    
    // Try to extract more specific error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorName = error instanceof Error ? error.name : 'Unknown error type';
    
    return NextResponse.json(
      { 
        error: 'Failed to mark dashboard as visited',
        details: errorMessage,
        type: errorName
      },
      { status: 500 }
    );
  }
}
