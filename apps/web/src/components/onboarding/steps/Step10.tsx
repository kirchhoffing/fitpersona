import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = { daysPerWeek: number }

export function Step10() {
  const { daysPerWeek: initial, setDaysPerWeek } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.daysPerWeek')

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[10]),
    defaultValues: initial != null ? { daysPerWeek: initial } : {},
  })
  
  const [selectedDays, setSelectedDays] = useState<number | null>(initial || null)

  const onSubmit = async (data: FormData) => {
    setDaysPerWeek(data.daysPerWeek)
    
    try {
      // Get all form data from the store
      const formData = useOnboardingStore.getState()
      console.log('Onboarding data to save:', formData)
      
      // BYPASS THE API: Store data directly in localStorage
      // This is a temporary workaround until the API issue is fixed
      localStorage.setItem('fitpersona_profile', JSON.stringify({
        gender: formData.gender || 'other',
        birthYear: new Date().getFullYear() - (formData.age || 30),
        height: formData.height || 170,
        weight: formData.weight || 70,
        goal: formData.goal || 'maintain_fitness',
        activityLevel: formData.activityLevel || 'moderate',
        equipment: formData.workoutLocation || 'home',
        dietaryPreferences: formData.dietaryPreferences || [],
        daysPerWeek: data.daysPerWeek || 3
      }))
      
      // Get the current locale from the URL
      const locale = window.location.pathname.split('/')[1] || 'en'
      console.log('Current locale for redirect:', locale)
      
      // Redirect to dashboard with locale
      console.log('Profile saved to localStorage, redirecting to dashboard')
      window.location.href = `/${locale}/dashboard`
    } catch (error) {
      console.error('Error saving onboarding data:', error)
      
      // Even if there's an error, try to redirect anyway
      const locale = window.location.pathname.split('/')[1] || 'en'
      window.location.href = `/${locale}/dashboard`
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">{t('title')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            {t('label')}
          </label>
          <div className="grid grid-cols-7 gap-3">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => {
                  setSelectedDays(day);
                  setValue('daysPerWeek', day);
                }}
                className={`py-3 px-4 rounded-lg text-center transition-colors ${selectedDays === day 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              >
                {day}
              </button>
            ))}
          </div>
          {errors.daysPerWeek && (
            <p className="mt-2 text-sm text-red-400">{errors.daysPerWeek.message}</p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => useOnboardingStore.getState().prevStep()}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('back')}
          </button>
          
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('complete')}
          </button>
        </div>
      </form>
    </div>
  )
}
