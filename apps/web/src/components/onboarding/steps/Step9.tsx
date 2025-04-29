import React from 'react'
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[9]),
    defaultValues: initial != null ? { daysPerWeek: initial } : {},
  })

  const onSubmit = (data: FormData) => {
    setDaysPerWeek(data.daysPerWeek)
    nextStep()
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">{t('title')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="daysPerWeek" className="block text-sm font-medium text-gray-300 mb-1">
            {t('label')}
          </label>
          <input
            type="number"
            id="daysPerWeek"
            {...register('daysPerWeek', { valueAsNumber: true })}
            min={1}
            max={7}
            className="w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 3"
          />
          {errors.daysPerWeek && (
            <p className="mt-1 text-sm text-red-400">{errors.daysPerWeek.message}</p>
          )}
        </div>

        <StepNavigator />
      </form>
    </div>
  )
}
