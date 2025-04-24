import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = {
  goal: 'lose_weight' | 'gain_muscle' | 'maintain_fitness'
}

export function Step5() {
  const { goal: initialGoal, setGoal, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.goal')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[5]),
    defaultValues: { goal: initialGoal ?? undefined },
  })

  // seçimi anlık store'a yansıtmak için
  useEffect(() => {
    const sub = watch((v) => v.goal && setGoal(v.goal))
    return () => sub.unsubscribe()
  }, [watch, setGoal])

  const selected = watch('goal')

  const options = [
    {
      value: 'lose_weight' as const,
      emoji: '🏃‍♂️',
      title: t('lose_weight.title'),
      description: t('lose_weight.description'),
    },
    {
      value: 'gain_muscle' as const,
      emoji: '💪',
      title: t('gain_muscle.title'),
      description: t('gain_muscle.description'),
    },
    {
      value: 'maintain_fitness' as const,
      emoji: '⚖️',
      title: t('maintain_fitness.title'),
      description: t('maintain_fitness.description'),
    },
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('title')}
      </h2>

      <form
        onSubmit={handleSubmit(({ goal }) => { setGoal(goal); nextStep(); })}
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
                {...register('goal')}
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

        {errors.goal && (
          <p className="text-red-500 text-sm">{errors.goal.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
}
