import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = { workoutLocation: 'home' | 'gym' }

export function Step7() {
  const { workoutLocation: initial, setWorkoutLocation, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.workoutLocation')
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[7]),
    defaultValues: { workoutLocation: initial ?? undefined },
  })

  const onSubmit = (data: FormData) => {
    setWorkoutLocation(data.workoutLocation)
    nextStep()
  }

  const selected = watch('workoutLocation')

  const options = [
    {
      value: 'home' as const,
      emoji: '🏠',
      title: t('home'),
      description: t('home_description'),
    },
    {
      value: 'gym' as const,
      emoji: '🏋️‍♂️',
      title: t('gym'),
      description: t('gym_description'),
    },
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('title')}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map(({ value, emoji, title, description }) => (
            <label
              key={value}
              className={`flex flex-col p-5 border-2 rounded-xl cursor-pointer transition-all ${selected === value ? 'border-blue-600 bg-blue-900/20' : 'border-gray-700 hover:border-blue-700 bg-gray-800/50'}`}
            >
              <div className="flex items-center mb-2">
                <input
                  {...register('workoutLocation')}
                  type="radio"
                  value={value}
                  className="sr-only"
                />
                <span className="text-2xl mr-3">{emoji}</span>
                <span className="font-semibold text-white">{title}</span>
              </div>
              <p className="text-base text-white">{description}</p>
            </label>
          ))}
        </div>

        {errors.workoutLocation && (
          <p className="text-red-500 text-sm">{errors.workoutLocation.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
}
