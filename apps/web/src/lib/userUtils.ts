import { prisma } from '@fitpersona/database/src/client';

/**
 * Check if a user has completed the onboarding process
 * @param userId The user's ID
 * @returns Boolean indicating whether onboarding is complete
 */
export async function hasCompletedOnboarding(userId: string): Promise<boolean> {
  if (!userId) return false;
  
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { 
        gender: true,
        birthYear: true,
        height: true,
        weight: true,
        goal: true,
        activityLevel: true
      }
    });
    
    // Check if profile exists and has all required fields
    return !!(profile && 
      profile.gender && 
      profile.birthYear && 
      profile.height && 
      profile.weight && 
      profile.goal && 
      profile.activityLevel);
  } catch (error) {
    console.error('Error checking onboarding status:', error);
    return false;
  }
}
