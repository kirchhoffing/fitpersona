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
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function OnboardingPage() {
  const { currentStep } = useOnboardingStore()
  const router = useRouter()
  const t = useTranslations('onboarding')

  // Handle form submission
  const handleSubmit = async () => {
    const formData = useOnboardingStore.getState()
    
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      // Reset form and redirect to dashboard
      useOnboardingStore.getState().resetForm()
      router.push('/dashboard')
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

        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  )
} 