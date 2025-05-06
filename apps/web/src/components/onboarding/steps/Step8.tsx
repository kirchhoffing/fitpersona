import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore, FitnessLevel } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = { fitnessLevel: FitnessLevel }

export function Step8() {
  const { fitnessLevel: initial, setFitnessLevel, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.fitnessLevel')

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[8]),
    defaultValues: initial ? { fitnessLevel: initial } : {},
  })
  
  const [selectedLevel, setSelectedLevel] = useState<FitnessLevel | null>(initial || null)

  const fitnessLevels: { id: FitnessLevel; label: string; description: string }[] = [
    { 
      id: 'beginner', 
      label: t('beginner'), 
      description: t('beginner_description') 
    },
    { 
      id: 'intermediate', 
      label: t('intermediate'), 
      description: t('intermediate_description') 
    },
    { 
      id: 'advanced', 
      label: t('advanced'), 
      description: t('advanced_description') 
    },
  ]

  const onSubmit = (data: FormData) => {
    setFitnessLevel(data.fitnessLevel)
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fitnessLevels.map(({ id, label, description }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setSelectedLevel(id);
                  setValue('fitnessLevel', id);
                }}
                className={`p-4 rounded-lg text-center transition-colors ${
                  selectedLevel === id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <div className="font-medium text-lg mb-2">{label}</div>
                <p className="text-sm opacity-75">{description}</p>
              </button>
            ))}
          </div>
          {errors.fitnessLevel && (
            <p className="mt-2 text-sm text-red-400">{errors.fitnessLevel.message}</p>
          )}
        </div>

        <StepNavigator />
      </form>
    </div>
  )
}
