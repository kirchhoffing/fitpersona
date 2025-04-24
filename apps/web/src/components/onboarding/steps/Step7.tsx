import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = { equipment: 'body_weight' | 'home_equipment' | 'gym' }

export function Step7() {
  const { workoutLocation: initial, setWorkoutLocation, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.equipment')
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[7]),
    defaultValues: { equipment: initial ?? undefined },
  })

  // Seçim değiştiğinde store'u güncelle
  useEffect(() => {
    const sub = watch(v => {
      if (v.equipment) {
        setWorkoutLocation(v.equipment)
        nextStep()
      }
    })
    return () => sub.unsubscribe()
  }, [watch, setWorkoutLocation, nextStep])

  const selected = watch('equipment')

  const options = [
    {
      value: 'body_weight' as const,
      emoji: '🧘‍♂️',
      title: t('body_weight'),
      description: t('body_weight_description'),
    },
    {
      value: 'home_equipment' as const,
      emoji: '🏠',
      title: t('home_equipment'),
      description: t('home_equipment_description'),
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
      {/* Başlığı beyaz yaptık */}
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('title')}
      </h2>

      <form
        onSubmit={handleSubmit(({ equipment }) => { setWorkoutLocation(equipment); nextStep(); })}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {options.map(({ value, emoji, title, description }) => (
            <label
              key={value}
              className={`flex flex-col items-center justify-center w-full p-6 border-2 rounded-lg cursor-pointer transition-all ${
                selected === value
                  ? 'border-blue-600 bg-green-600'
                  : 'border-gray-200 hover:border-blue-400'
              }`}
            >
              <input
                {...register('equipment')}
                type="radio"
                value={value}
                className="sr-only"
              />

              <div className="text-4xl mb-3">{emoji}</div>
              <span className="font-medium block mb-2">{title}</span>
              <p className="text-sm text-white">{description}</p>
            </label>
          ))}
        </div>

        {errors.equipment && (
          <p className="text-red-500 text-sm">{errors.equipment.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
}
