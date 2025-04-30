import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = { daysPerWeek: number }

export function Step9() {
  const { daysPerWeek: initial, setDaysPerWeek, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.daysPerWeek')

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[9]),
    defaultValues: initial != null ? { daysPerWeek: initial } : {},
  })
  
  const [selectedDays, setSelectedDays] = useState<number | null>(initial || null)

  const onSubmit = (data: FormData) => {
    setDaysPerWeek(data.daysPerWeek)
    nextStep()
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

        <StepNavigator />
      </form>
    </div>
  )
}
