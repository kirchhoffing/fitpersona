"use client";
import { useLocale, useTranslations } from 'next-intl'
import { useOnboardingStore } from '@/store/onboardingStore'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Goal, ActivityLevel, WorkoutLocation, Gender } from '@/store/onboardingStore'

import { CalorieDisplay } from './calorie-display'
import { WorkoutCriteria, selectWorkoutProgram } from '../../../../../../packages/workouts/workoutProgramMap';
import { WorkoutProgramDisplay } from '@/components/WorkoutProgramDisplay';

export default function DashboardPage() {
  const locale = useLocale()
  const t = useTranslations('dashboard')
  const tOnboarding = useTranslations('onboarding.steps')
  const {
    gender,
    age,
    height,
    weight,
    goal,
    activityLevel,
    workoutLocation,
    dietaryPreferences,
    resetForm,
    setGender,
    setAge,
    setHeight,
    setWeight,
    setGoal,
    setActivityLevel,
    setWorkoutLocation,
    setDietaryPreferences,
  } = useOnboardingStore()
  
  // State for editing mode
  const [isEditing, setIsEditing] = useState(false)
  const [editValues, setEditValues] = useState({
    gender: gender as Gender || 'male',
    age: age?.toString() || '',
    height: height?.toString() || '',
    weight: weight?.toString() || '',
    goal: goal as Goal || 'lose_weight',
    activityLevel: activityLevel as ActivityLevel || 'sedentary',
    workoutLocation: workoutLocation as WorkoutLocation || 'home',
    dietaryPreferences: dietaryPreferences || '',
  })

  // Define a more complete profile data type that matches our file-based storage format
  type ProfileDataType = {
    gender: 'male' | 'female' | 'other';
    birthYear: number;
    height: number;
    weight: number;
    goal: 'lose_weight' | 'gain_muscle' | 'maintain_fitness';
    activityLevel: 'sedentary' | 'lightly_active' | 'active' | 'very_active';
    equipment?: string;
    dietaryPreferences?: string | string[];
    userId?: string;
    updatedAt?: string;
    daysPerWeek?: number;
  };

  const [profileData, setProfileData] = useState<ProfileDataType | null>(null);

  // Debug values from useOnboardingStore
  console.log('useOnboardingStore values:', { gender, age, height, weight, goal, activityLevel, workoutLocation });

  // Add loading state to prevent immediate logout during session initialization
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    console.log('Dashboard page mounted, loading profile...');
    
    // Mark that the user has visited the dashboard
    const markDashboardVisited = async () => {
      try {
        // Call the API (even though it's not updating the database right now)
        await fetch('/api/user/onboarding-status', {
          method: 'POST',
        });
        
        // Store the dashboard visit information in localStorage as a workaround
        localStorage.setItem('fitpersona_dashboard_visited', 'true');
        
        console.log('Marked dashboard as visited (localStorage workaround)');
      } catch (error) {
        console.error('Error marking dashboard as visited:', error);
        // Still try to set localStorage even if the API call fails
        localStorage.setItem('fitpersona_dashboard_visited', 'true');
      }
    };
    
    try {
      // First try to get data from localStorage (our temporary workaround)
      const storedProfile = localStorage.getItem('fitpersona_profile');
      
      if (storedProfile) {
        // We have data in localStorage
        const profileData = JSON.parse(storedProfile);
        console.log('Loaded profile data from localStorage:', profileData);
        
        setProfileData(profileData);
        
        // Update the store with the profile data
        const store = useOnboardingStore.getState();
        if (profileData.gender) store.setGender(profileData.gender);
        if (profileData.birthYear) store.setAge(new Date().getFullYear() - profileData.birthYear);
        if (profileData.height) store.setHeight(profileData.height);
        if (profileData.weight) store.setWeight(profileData.weight);
        if (profileData.goal) store.setGoal(profileData.goal);
        if (profileData.activityLevel) store.setActivityLevel(profileData.activityLevel);
        if (profileData.equipment) store.setWorkoutLocation(profileData.equipment);
        if (profileData.dietaryPreferences) store.setDietaryPreferences(profileData.dietaryPreferences);
        
        // Mark that the user has visited the dashboard
        markDashboardVisited();
        
        setIsLoading(false);
      } else {
        // Fallback to API if nothing in localStorage
        console.log('No profile in localStorage, trying API...');
        
        // Add a small delay to allow session to initialize
        const timeoutId = setTimeout(() => {
          fetch('/api/profile')
            .then(res => {
              console.log('Profile API response status:', res.status);
              if (res.status === 401) {
                // Don't set auth error, just use default data
                return Promise.reject('Unauthorized');
              }
              
              // Handle 404 (profile not found) gracefully by using default data
              if (res.status === 404) {
                console.log('Profile not found (404), using default data');
                return null; // Return null to indicate no profile exists yet
              }
              
              return res.ok ? res.json() : Promise.reject(`API request failed with status ${res.status}`);
            })
            .then(data => {
              console.log('Fetched profile data from API:', data);
              
              // If data is null (404 response), we're using defaults - no need to update state
              if (data) {
                setProfileData(data);
                const store = useOnboardingStore.getState();
                if (data.gender) store.setGender(data.gender);
                if (data.birthYear) store.setAge(new Date().getFullYear() - data.birthYear);
                if (data.height) store.setHeight(data.height);
                if (data.weight) store.setWeight(data.weight);
                if (data.goal) store.setGoal(data.goal);
                if (data.activityLevel) store.setActivityLevel(data.activityLevel);
                if (data.equipment) store.setWorkoutLocation(data.equipment);
                if (data.dietaryPreferences) store.setDietaryPreferences(data.dietaryPreferences);
                
                // Mark that the user has visited the dashboard
                markDashboardVisited();
              }
              
              setIsLoading(false);
            })
            .catch(error => {
              console.log('Using default profile data due to API error');
              // Use default data from the store
              setIsLoading(false);
            });
        }, 500);
        
        return () => clearTimeout(timeoutId);
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
      setIsLoading(false);
    }
  }, []);

  const onUpdate = async () => {
    if (isEditing) {
      // Save changes to local state
      setGender(editValues.gender as Gender)
      setAge(editValues.age ? Number(editValues.age) : null)
      setHeight(editValues.height ? Number(editValues.height) : null)
      setWeight(editValues.weight ? Number(editValues.weight) : null)
      setGoal(editValues.goal as Goal)
      setActivityLevel(editValues.activityLevel as ActivityLevel)
      setWorkoutLocation(editValues.workoutLocation as WorkoutLocation)
      setDietaryPreferences(typeof editValues.dietaryPreferences === 'string' ? editValues.dietaryPreferences.split(',').map(s => s.trim()).filter(Boolean) : (Array.isArray(editValues.dietaryPreferences) ? editValues.dietaryPreferences : []))
      
      // Persist to backend
      await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gender: editValues.gender,
          birthYear: new Date().getFullYear() - Number(editValues.age),
          height: Number(editValues.height),
          weight: Number(editValues.weight),
          fitnessGoals: [editValues.goal],
          activityLevel: editValues.activityLevel,
          equipment: editValues.workoutLocation,
          dietaryPreferences: Array.isArray(editValues.dietaryPreferences) ? editValues.dietaryPreferences : (editValues.dietaryPreferences?.split(',').map(s => s.trim()).filter(Boolean) || [])
        })
      })
      // Optionally: refetch profileData here
      setIsEditing(false)
    } else {
      // Enter edit mode
      setIsEditing(true)
    }
  }

  const router = useRouter();
  const [resetInProgress, setResetInProgress] = useState(false);

  // Function to handle the reset of user profile
  const onReset = async () => {
    if (isEditing) {
      // Cancel editing
      setEditValues({
        gender: gender as Gender || 'male',
        age: age?.toString() || '',
        height: height?.toString() || '',
        weight: weight?.toString() || '',
        goal: goal as Goal || 'lose_weight',
        activityLevel: activityLevel as ActivityLevel || 'sedentary',
        workoutLocation: workoutLocation as WorkoutLocation || 'home',
        dietaryPreferences: dietaryPreferences || '',
      })
      setIsEditing(false)
    } else {
      // Confirm before resetting
      const userConfirmed = window.confirm('Are you sure you want to reset your profile? All your data will be cleared.');
      
      if (userConfirmed) {
        try {
          setResetInProgress(true);
          
          // 1. Call the API to reset backend data
          const response = await fetch('/api/user/reset', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          if (!response.ok) {
            throw new Error('Failed to reset profile');
          }
          
          // 2. Clear local storage data
          localStorage.removeItem('fitpersona_profile');
          localStorage.removeItem('fitpersona_dashboard_visited');
          localStorage.removeItem('fitpersona_onboarding_state');
          
          // 3. Reset the store state
          resetForm();
          
          // 4. Show a temporary notification (since we don't have a toast library)
          const notification = document.createElement('div');
          notification.textContent = 'Your profile has been reset';
          notification.style.position = 'fixed';
          notification.style.bottom = '20px';
          notification.style.right = '20px';
          notification.style.backgroundColor = '#10B981';
          notification.style.color = 'white';
          notification.style.padding = '12px 20px';
          notification.style.borderRadius = '4px';
          notification.style.zIndex = '9999';
          document.body.appendChild(notification);
          
          // Remove the notification after 3 seconds
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 3000);
          
          // 5. Redirect to the home page
          router.push('/');
        } catch (error) {
          console.error('Error resetting profile:', error);
          alert('Failed to reset your profile. Please try again.');
        } finally {
          setResetInProgress(false);
        }
      }
    }
  }

  // Calorie display defaults
  const cdGender: 'male' | 'female' = (gender === 'male' || gender === 'female' ? gender : 'male');
  const cdAge = age ?? 0;
  const cdHeight = height ?? 0;
  const cdWeight = weight ?? 0;
  const cdActivityLevel = activityLevel ?? 'sedentary';
  const cdGoal = goal ?? 'lose_weight';

  // Workout location mapping with explicit type
  // Safely convert workoutLocation to the expected type
  const wLocation: WorkoutCriteria['workoutLocation'] = 
    !workoutLocation ? 'home' : // Handle null case
    (String(workoutLocation) === 'home') ? 'home' : 
    String(workoutLocation) === 'gym' ? 'gym' : 'home';

  // Prepare criteria for workout selection
  const workoutCriteria: WorkoutCriteria = {
    goal: cdGoal,
    workoutLocation: wLocation,
    activityLevel: cdActivityLevel,
  };
  const selectedProgram = selectWorkoutProgram(workoutCriteria);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {isLoading ? (
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-white text-xl">Loading your profile...</p>
        </div>
      ) : authError ? (
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-white text-2xl mb-4">Authentication Error</h2>
          <p className="text-gray-300 mb-6 text-center">There was a problem accessing your profile. This might be because your session has expired.</p>
          <div className="flex space-x-4">
            <a href="/auth/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </a>
            <a href="/" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Go to Home
            </a>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow p-6 space-y-6">
        <h1 className="text-4xl text-white font-bold">{t('title')}</h1>
        {/* Info/Profile Section - moved to top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            <div className="space-y-3 text-gray-300">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('gender')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.gender} 
                    onChange={(e) => setEditValues({...editValues, gender: e.target.value as Gender})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {profileData
                      ? tOnboarding(`gender.${profileData.gender}`)
                      : (gender ? tOnboarding(`gender.${gender}`) : '')}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('age')}</span>
                {isEditing ? (
                  <input 
                    type="number" 
                    value={editValues.age} 
                    onChange={(e) => setEditValues({...editValues, age: e.target.value})}
                    className="bg-gray-700 text-white p-2 rounded"
                  />
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {profileData ? (new Date().getFullYear() - profileData.birthYear) : age || ''}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('height')}</span>
                {isEditing ? (
                  <div className="flex items-center">
                    <input 
                      type="number" 
                      value={editValues.height} 
                      onChange={(e) => setEditValues({...editValues, height: e.target.value})}
                      className="bg-gray-700 text-white p-2 rounded"
                    />
                    <span className="ml-2">cm</span>
                  </div>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {profileData ? profileData.height : height || ''} cm
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('weight')}</span>
                {isEditing ? (
                  <div className="flex items-center">
                    <input 
                      type="number" 
                      value={editValues.weight} 
                      onChange={(e) => setEditValues({...editValues, weight: e.target.value})}
                      className="bg-gray-700 text-white p-2 rounded"
                    />
                    <span className="ml-2">kg</span>
                  </div>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {profileData ? profileData.weight : weight || ''} kg
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('goal')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.goal} 
                    onChange={(e) => setEditValues({...editValues, goal: e.target.value as Goal})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="lose_weight">Lose Weight</option>
                    <option value="gain_muscle">Gain Muscle</option>
                    <option value="maintain_fitness">Maintain Fitness</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {goal ? tOnboarding(`goal.${goal}.title`) : 'N/A'}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('activityLevel')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.activityLevel} 
                    onChange={(e) => setEditValues({...editValues, activityLevel: e.target.value as ActivityLevel})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="lightly_active">Lightly Active</option>
                    <option value="active">Active</option>
                    <option value="very_active">Very Active</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {activityLevel ? tOnboarding(`activityLevel.${activityLevel}`) : 'N/A'}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('workoutLocation')}</span>
                {isEditing ? (
                  <select 
                    value={editValues.workoutLocation} 
                    onChange={(e) => setEditValues({...editValues, workoutLocation: e.target.value as WorkoutLocation})}
                    className="bg-gray-700 text-white p-2 rounded"
                  >
                    <option value="home">Home</option>
                    <option value="gym">Gym</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {workoutLocation ? tOnboarding(`equipment.${workoutLocation}`) : t('none')}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">{t('dietaryPreferences')}</span>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={editValues.dietaryPreferences} 
                    onChange={(e) => setEditValues({...editValues, dietaryPreferences: e.target.value})}
                    className="bg-gray-700 text-white p-2 rounded"
                  />
                ) : (
                  <span className="cursor-pointer hover:text-blue-400" onClick={() => setIsEditing(true)}>
                    {(() => {
                      try {
                        // Handle various formats of dietaryPreferences safely
                        if (!dietaryPreferences && !profileData?.dietaryPreferences) return t('none');
                        
                        // Get from store or profile data
                        const prefsData = dietaryPreferences || profileData?.dietaryPreferences;
                        
                        // Handle array format
                        if (Array.isArray(prefsData)) {
                          return prefsData.length > 0 ? 
                            prefsData.map(pref => tOnboarding(`health.${pref.trim()}`)).join(', ') : 
                            t('none');
                        }
                        
                        // Handle string format
                        if (typeof prefsData === 'string') {
                          return prefsData.trim() ? 
                            prefsData.split(',').map(pref => tOnboarding(`health.${pref.trim()}`)).join(', ') : 
                            t('none');
                        }
                        
                        // Fallback
                        return t('none');
                      } catch (error) {
                        console.error('Error rendering dietary preferences:', error);
                        return t('none');
                      }
                    })()} 
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-4 md:mt-0">
            <Button 
              variant={isEditing ? "default" : "outline"} 
              onClick={onUpdate}
              className="w-32"
            >
              {isEditing ? t('update') : t('edit')}
            </Button>
            <Button 
              variant="destructive" 
              onClick={onReset}
              className="w-32"
            >
              {isEditing ? t('cancel') : t('reset')}
            </Button>
          </div>
        </div>
        {/* Calorie Section - now under info */}
        <CalorieDisplay
          gender={cdGender}
          age={cdAge}
          height={cdHeight}
          weight={cdWeight}
          activityLevel={cdActivityLevel}
          goal={cdGoal}
        />
        {/* Dynamic Workout Program Section - now at bottom */}
        <WorkoutProgramDisplay program={selectedProgram} locale={locale} />
      </div>
      )}
    </div>
  )
}
