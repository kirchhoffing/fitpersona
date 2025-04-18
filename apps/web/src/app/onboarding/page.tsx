'use client'

import { redirect } from 'next/navigation'
import { OnboardingForm } from '@/components/onboarding/OnboardingForm'

export default function OnboardingPage() {
  // Get the preferred language from localStorage, default to 'en' if not set
  let preferredLanguage = 'en'
  
  if (typeof window !== 'undefined') {
    preferredLanguage = localStorage.getItem('preferredLanguage') || 'en'
  }

  redirect(`/${preferredLanguage}/onboarding`)
} 