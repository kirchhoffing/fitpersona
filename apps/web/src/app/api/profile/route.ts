import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@fitpersona/database/src/client'

// Define the expected request body type
type ProfileData = {
  gender: 'male' | 'female' | 'other'
  birthYear: number
  height: number
  weight: number
  fitnessGoals: string[]
  activityLevel: string
  workoutLocation: string
  dietaryPreferences: string[]
}

export async function GET(req: Request) {
  try {
    // Get user from session or use a default ID for testing
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const userId = session.user.id;
    
    try {
      // Check if profile exists in the database
      const profile = await prisma.profile.findUnique({
        where: { userId }
      });
      
      if (profile) {
        return NextResponse.json(profile);
      } else {
        // No profile found - return 404
        return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
      }
    } catch (prismaError: any) {
      // Handle any Prisma error with code P2022 (unknown column error)
      // This will catch both English and non-English locale errors
      if (prismaError.code === 'P2022') {
        console.error('Encountered database column error with Prisma:', prismaError.meta);
        // Return a 404 to indicate profile not found, which is likely the case
        return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
      }
      throw prismaError; // Re-throw for the outer catch block to handle
    }
  } catch (error) {
    console.error('Error reading profile:', error);
    return NextResponse.json({ error: 'Failed to read profile' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    console.log('[DEBUG] Starting profile POST request');
    
    // Get the current user's session
    const session = await getServerSession(authOptions);
    console.log('[DEBUG] Session from getServerSession:', session ? 'Session exists' : 'Session is null/undefined');
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const userId = session.user.id;
    console.log('[DEBUG] Using user ID:', userId);
    
    // Parse the request body
    const body = await req.json() as Partial<ProfileData>;
    console.log('[DEBUG] Received profile data:', body);
    
    // Prepare profile data with defaults
    // Sanitize values to ensure we're not storing translation keys
    const sanitizeValue = (value: string | undefined, defaultValue: string): string => {
      if (!value) return defaultValue;
      // Check if the value looks like a translation key (contains 'search:' or similar patterns)
      if (value.includes('search:') || value.startsWith('t(')) {
        return defaultValue;
      }
      return value;
    };
    
    const profileData = {
      gender: sanitizeValue(body.gender, 'male'),
      birthYear: body.birthYear ? Math.floor(Number(body.birthYear)) : 1990,
      height: body.height ? Math.floor(Number(body.height)) : 170,
      weight: body.weight ? Number(body.weight) : 70,
      goal: body.fitnessGoals && body.fitnessGoals.length > 0 
        ? sanitizeValue(body.fitnessGoals[0], 'maintain_fitness')
        : 'maintain_fitness',
      activityLevel: sanitizeValue(body.activityLevel, 'sedentary'),
      workoutLocation: sanitizeValue(body.workoutLocation, 'home'),
      dietaryPreferences: body.dietaryPreferences && body.dietaryPreferences.length > 0 
        ? body.dietaryPreferences
          .map(pref => sanitizeValue(pref, ''))
          .filter(Boolean)
          .join(',')
        : ''
    };
    
    console.log('[DEBUG] Sanitized profile data for database:', profileData);
    
    // Use a simpler approach to avoid locale issues
    try {
      // First try to update an existing profile
      try {
        console.log('[DEBUG] Attempting to update profile for user:', userId);
        const updatedProfile = await prisma.profile.update({
          where: { userId },
          data: profileData
        });
        
        console.log('[DEBUG] Profile updated successfully');
        return NextResponse.json(updatedProfile);
      } catch (updateError: any) {
        // If update fails with P2025 (record not found), create a new profile
        if (updateError.code === 'P2025') {
          console.log('[DEBUG] No existing profile, creating new one');
          const newProfile = await prisma.profile.create({
            data: {
              ...profileData,
              userId,
              hasVisitedDashboard: false // Initialize with false
            }
          });
          
          console.log('[DEBUG] New profile created successfully');
          return NextResponse.json(newProfile);
        }
        throw updateError; // Re-throw other update errors
      }
    } catch (prismaError: any) {
      // Handle any Prisma error with code P2022 (unknown column error)
      if (prismaError.code === 'P2022') {
        console.error('Encountered database column error with Prisma:', prismaError.meta);
        
        // Try a direct approach to create a profile with minimal fields
        try {
          console.log('[DEBUG] Attempting to create minimal profile as fallback');
          const minimalProfile = await prisma.profile.create({
            data: {
              userId,
              gender: 'other',
              birthYear: 1990,
              height: 170,
              weight: 70,
              goal: 'maintain_fitness',
              activityLevel: 'sedentary',
              workoutLocation: 'home',
              hasVisitedDashboard: false
            }
          });
          
          return NextResponse.json(minimalProfile);
        } catch (fallbackError) {
          console.error('Fallback profile creation also failed:', fallbackError);
          // Let the outer catch block handle this
          throw fallbackError;
        }
      }
      throw prismaError; // Re-throw for the outer catch block to handle
    }
  } catch (e: any) { 
    console.error('--- FitPersona API Profile Error Details Start ---');
    console.error('Timestamp:', new Date().toISOString());
    console.error('Type of caught error:', typeof e);

    if (e instanceof Error) {
      console.error('Error Name:', e.name);
      console.error('Error Message:', e.message);
      console.error('Error Stack:', e.stack);
    } else {
      console.error('Caught error (stringified):', String(e));
      try {
        console.error('Caught error (JSON.stringify):', JSON.stringify(e, null, 2));
      } catch (stringifyError) {
        console.error('Could not JSON.stringify the error object:', stringifyError);
        console.error('Caught error (raw object, inspect in terminal):', e);
      }
    }
    console.error('--- FitPersona API Profile Error Details End ---');

    const clientErrorMessage = e instanceof Error ? e.message : 'An unexpected error occurred while saving your profile. Please try again.';
    
    return NextResponse.json(
      { error: clientErrorMessage },
      { status: 500 }
    );
  }
}