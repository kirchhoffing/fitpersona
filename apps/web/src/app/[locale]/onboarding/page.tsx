// [FitPersona Onboarding Page]
// This file serves as the main route handler for the onboarding flow for each locale.
// It orchestrates the step-by-step onboarding process, manages state, and imports step components from '@/components/onboarding/steps'.
// The onboarding UI and logic are implemented in the components/onboarding directory.
// Any changes to onboarding flow, routing, or step rendering should be made here.

'use client'

import { useOnboardingStore } from '@/store/onboardingStore'
import { Step1 } from '@/components/onboarding/steps/Step1'
import { Step2 } from '@/components/onboarding/steps/Step2'
import { Step3 } from '@/components/onboarding/steps/Step3'
import { Step4 } from '@/components/onboarding/steps/Step4'
import { Step5 } from '@/components/onboarding/steps/Step5'
import { Step6 } from '@/components/onboarding/steps/Step6'
import { Step7 } from '@/components/onboarding/steps/Step7'
import { Step8 } from '@/components/onboarding/steps/Step8'
import { Step9 } from '@/components/onboarding/steps/Step9'
import { Step10 } from '@/components/onboarding/steps/Step10'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { getSession } from 'next-auth/react'

export default function OnboardingPage() {
  const { currentStep, resetForm } = useOnboardingStore()
  const router = useRouter()
  const t = useTranslations('onboarding')
  
  // Always reset the form and start from Step 1 on initial page load
  useEffect(() => {
    // Ensure we're always starting from step 1 on page load
    resetForm()
  }, [])

  // Handle form submission
  const handleSubmit = async () => {
    const formData = useOnboardingStore.getState()
    
    // Format data to match expected API and database structure
    const profileData = {
      gender: formData.gender || 'male',
      birthYear: formData.age ? new Date().getFullYear() - formData.age : null,
      height: formData.height,
      weight: formData.weight,
      fitnessGoals: formData.goal ? [formData.goal] : ['maintain_fitness'],
      activityLevel: formData.activityLevel || 'sedentary', 
      workoutLocation: formData.workoutLocation || 'home',
      equipment: formData.workoutLocation || 'home', // For API compatibility
      dietaryPreferences: formData.dietaryPreferences || [],
      daysPerWeek: formData.daysPerWeek || 3
    }
    
    console.log('Sending profile data to API:', profileData);
    
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      // Reset form and redirect to dashboard
      useOnboardingStore.getState().resetForm()
      
      // Get the current locale from the router
      const locale = window.location.pathname.split('/')[1];
      console.log('Current locale for redirect:', locale);
      
      // Properly redirect to the localized dashboard
      router.push(`/${locale}/dashboard`)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error (show error message to user)
    }
  }

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 />
      case 5:
        return <Step5 />
      case 6:
        return <Step6 />
      case 7:
        return <Step7 />
      case 8:
        return <Step8 />
      case 9:
        return <Step9 />
      case 10:
        return <Step10 />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start pt-16">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {t('description')}
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 relative">
          {/* Reset Button */}
          <button 
            onClick={() => {
              if (window.confirm(t('resetConfirmation') || 'Are you sure you want to reset your progress?')) {
                useOnboardingStore.getState().resetForm()
              }
            }}
            className="absolute top-4 right-4 text-sm bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md transition-colors"
          >
            {t('reset') || 'Reset'}
          </button>
          
          {renderStep()}
        </div>
      </div>
    </div>
  )
} 