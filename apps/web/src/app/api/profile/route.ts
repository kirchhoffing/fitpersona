import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

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

// Simple file-based profile storage
const PROFILES_DIR = path.join(process.cwd(), 'profiles');

// Ensure profiles directory exists
try {
  if (!fs.existsSync(PROFILES_DIR)) {
    fs.mkdirSync(PROFILES_DIR, { recursive: true });
  }
} catch (error) {
  console.error('Error creating profiles directory:', error);
}

export async function GET(req: Request) {
  try {
    // Get user from session or use a default ID for testing
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || 'guest-user';
    
    // Check if profile exists
    const profilePath = path.join(PROFILES_DIR, `${userId}.json`);
    
    if (fs.existsSync(profilePath)) {
      const profileData = fs.readFileSync(profilePath, 'utf8');
      return NextResponse.json(JSON.parse(profileData));
    } else {
      // No profile found - return 404 with empty object instead of 204
      // Using 404 instead of 204 because 204 responses should not include a body
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
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
    
    // Get user ID (use guest-user as fallback for testing)
    const userId = session?.user?.id || 'guest-user';
    console.log('[DEBUG] Using user ID:', userId);
    
    // Parse the request body
    const body = await req.json() as Partial<ProfileData>;
    console.log('[DEBUG] Received profile data:', body);
    
    // Prepare profile data with defaults
    const profileData = {
      userId,
      gender: body.gender || 'other',
      birthYear: body.birthYear ? Math.floor(Number(body.birthYear)) : 1990,
      height: body.height ? Math.floor(Number(body.height)) : 170,
      weight: body.weight ? Number(body.weight) : 70,
      goal: body.fitnessGoals && body.fitnessGoals.length > 0 ? body.fitnessGoals[0] : 'maintain_fitness',
      activityLevel: body.activityLevel || 'moderate',
      workoutLocation: body.workoutLocation || 'home',
      dietaryPreferences: body.dietaryPreferences && body.dietaryPreferences.length > 0 
        ? body.dietaryPreferences.join(',') 
        : '',
      updatedAt: new Date().toISOString()
    };
    
    // Save profile to file
    const profilePath = path.join(PROFILES_DIR, `${userId}.json`);
    console.log('[DEBUG] Saving profile to:', profilePath);
    
    try {
      fs.writeFileSync(profilePath, JSON.stringify(profileData, null, 2));
      console.log('[DEBUG] Profile saved successfully');
    } catch (fileError) {
      console.error('[DEBUG] Error saving profile file:', fileError);
      throw new Error(`File system error: ${fileError instanceof Error ? fileError.message : 'Unknown file error'}`);
    }

    return NextResponse.json(profileData)
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