// [FitPersona OnboardingForm Component]
// This file defines the main UI component for the onboarding form.
// It handles form validation, user input, and submission logic for onboarding data.
// Used by the onboarding route/page to render the onboarding steps and collect user information.
// Step-specific UI is further split into components/onboarding/steps/StepX.tsx.

'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'

// Form validation schema
const onboardingSchema = z.object({
  gender: z.enum(['male', 'female', 'other']),
  birthYear: z.number().min(1900).max(new Date().getFullYear()),
  height: z.number().min(100).max(250), // in cm
  weight: z.number().min(30).max(300), // in kg
  fitnessGoals: z.array(z.enum(['weight_loss', 'muscle_gain', 'endurance', 'flexibility'])),
  activityLevel: z.enum(['sedentary', 'light', 'moderate', 'active', 'very_active']),
  availableEquipment: z.array(z.enum(['none', 'dumbbells', 'barbell', 'kettlebell', 'resistance_bands', 'pullup_bar'])),
  dietaryPreferences: z.array(z.enum(['vegetarian', 'vegan', 'gluten_free', 'dairy_free', 'none'])),
})

type OnboardingFormData = z.infer<typeof onboardingSchema>

export function OnboardingForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
  })

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to save profile')
      }

      router.push('/dashboard')
    } catch (error) {
      console.error('Error saving profile:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Information Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Basic Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">
              Gender
            </label>
            <select
              id="gender"
              {...register('gender')}
              className="w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-400">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="birthYear" className="block text-sm font-medium text-gray-300 mb-1">
              Birth Year
            </label>
            <input
              type="number"
              id="birthYear"
              {...register('birthYear', { valueAsNumber: true })}
              className="w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 1990"
            />
            {errors.birthYear && (
              <p className="mt-1 text-sm text-red-400">{errors.birthYear.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              {...register('height', { valueAsNumber: true })}
              className="w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 175"
            />
            {errors.height && (
              <p className="mt-1 text-sm text-red-400">{errors.height.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-300 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              {...register('weight', { valueAsNumber: true })}
              className="w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 70"
            />
            {errors.weight && (
              <p className="mt-1 text-sm text-red-400">{errors.weight.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Fitness Goals Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Fitness Goals</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {['weight_loss', 'muscle_gain', 'endurance', 'flexibility'].map((goal) => (
            <label key={goal} className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer border border-gray-600">
              <input
                type="checkbox"
                value={goal}
                {...register('fitnessGoals')}
                className="rounded border-gray-500 bg-gray-600 text-blue-500 focus:ring-blue-500 h-4 w-4"
              />
              <span className="ml-3 text-sm text-gray-300">
                {goal.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </label>
          ))}
        </div>
        {errors.fitnessGoals && (
          <p className="mt-1 text-sm text-red-400">{errors.fitnessGoals.message}</p>
        )}
      </div>

      {/* Activity & Equipment Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Activity & Equipment</h3>
        
        <div>
          <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-300 mb-1">
            Activity Level
          </label>
          <select
            id="activityLevel"
            {...register('activityLevel')}
            className="w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select activity level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="very_active">Very Active</option>
          </select>
          {errors.activityLevel && (
            <p className="mt-1 text-sm text-red-400">{errors.activityLevel.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Available Equipment
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['none', 'dumbbells', 'barbell', 'kettlebell', 'resistance_bands', 'pullup_bar'].map((equipment) => (
              <label key={equipment} className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer border border-gray-600">
                <input
                  type="checkbox"
                  value={equipment}
                  {...register('availableEquipment')}
                  className="rounded border-gray-500 bg-gray-600 text-blue-500 focus:ring-blue-500 h-4 w-4"
                />
                <span className="ml-3 text-sm text-gray-300">
                  {equipment.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </label>
            ))}
          </div>
          {errors.availableEquipment && (
            <p className="mt-1 text-sm text-red-400">{errors.availableEquipment.message}</p>
          )}
        </div>
      </div>

      {/* Dietary Preferences Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Dietary Preferences</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['vegetarian', 'vegan', 'gluten_free', 'dairy_free', 'none'].map((preference) => (
            <label key={preference} className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer border border-gray-600">
              <input
                type="checkbox"
                value={preference}
                {...register('dietaryPreferences')}
                className="rounded border-gray-500 bg-gray-600 text-blue-500 focus:ring-blue-500 h-4 w-4"
              />
              <span className="ml-3 text-sm text-gray-300">
                {preference.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </label>
          ))}
        </div>
        {errors.dietaryPreferences && (
          <p className="mt-1 text-sm text-red-400">{errors.dietaryPreferences.message}</p>
        )}
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? 'Saving...' : 'Complete Profile'}
        </button>
      </div>
    </form>
  )
} 