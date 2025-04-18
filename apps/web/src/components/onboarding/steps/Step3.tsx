import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = { height: number }

export function Step3() {
  const { height: initialHeight, setHeight } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.height')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[3]),
    defaultValues: { height: initialHeight ?? undefined },
  })

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Başlığı beyaz yaptık */}
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('title')}
      </h2>
      <form
        onSubmit={handleSubmit(({ height }) => setHeight(height))}
        className="space-y-6"
      >
        <input
          type="number"
          {...register('height', { valueAsNumber: true })}
          placeholder={t('placeholder')}
          min={100}
          max={250}
          step={1}
          className={`w-full p-4 border-2 rounded-lg ${
            errors.height ? 'border-red-500' : 'border-gray-200'
          } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900`}
        />

        {errors.height && (
          <p className="text-red-500 text-sm">{errors.height.message}</p>
        )}

        <p className="text-sm text-gray-500">{t('example')}</p>

        <StepNavigator />
      </form>
    </div>
  )
}
