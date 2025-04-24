import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = {
  activityLevel: 'sedentary' | 'lightly_active' | 'active' | 'very_active'
}

export function Step6() {
  const { activityLevel: initialLevel, setActivityLevel, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.activityLevel')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[6]),
    defaultValues: { activityLevel: initialLevel ?? undefined },
  })

  // Seçim değiştiğinde store'u güncelle
  useEffect(() => {
    const sub = watch((v) => {
      if (v.activityLevel) setActivityLevel(v.activityLevel)
    })
    return () => sub.unsubscribe()
  }, [watch, setActivityLevel])

  const selected = watch('activityLevel')

  const options = [
    {
      value: 'sedentary' as const,
      emoji: '🪑',
      title: t('sedentary'),
      description: t('sedentary_description'),
    },
    {
      value: 'lightly_active' as const,
      emoji: '🚶‍♂️',
      title: t('lightly_active'),
      description: t('lightly_active_description'),
    },
    {
      value: 'active' as const,
      emoji: '🏃‍♂️',
      title: t('active'),
      description: t('active_description'),
    },
    {
      value: 'very_active' as const,
      emoji: '💪',
      title: t('very_active'),
      description: t('very_active_description'),
    },
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Başlığı beyaz yaptık */}
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('title')}
      </h2>

      <form
        onSubmit={handleSubmit(({ activityLevel }) => { setActivityLevel(activityLevel); nextStep(); })}
        className="space-y-6"
      >
        <div className="space-y-4">
          {options.map(({ value, emoji, title, description }) => (
            <label
              key={value}
              className={`flex items-center w-full p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selected === value
                  ? 'border-blue-600 bg-green-600'
                  : 'border-gray-200 hover:border-blue-400'
              }`}
            >
              <input
                {...register('activityLevel')}
                type="radio"
                value={value}
                className="sr-only"
              />
              <div className="text-2xl mr-4">{emoji}</div>
              <div>
                <span className="font-medium block">{title}</span>
                <p className="text-sm text-white">{description}</p>
              </div>
            </label>
          ))}
        </div>

        {errors.activityLevel && (
          <p className="text-red-500 text-sm">
            {errors.activityLevel.message}
          </p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
}
