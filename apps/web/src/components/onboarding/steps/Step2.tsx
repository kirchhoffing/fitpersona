import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = {
  age: number
}

export function Step2() {
  const { age, setAge } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.age')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[2]),
    defaultValues: { age: age || undefined },
  })

  const onSubmit = (data: FormData) => {
    setAge(data.age)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('title')}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <input
            type="number"
            {...register('age', { valueAsNumber: true })}
            placeholder={t('placeholder')}
            className={`w-full p-4 border-2 rounded-lg ${
              errors.age ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900`}
            min={13}
            max={120}
            step={1}
          />
        </div>

        {errors.age && (
          <p className="text-red-500 text-sm mt-2">{errors.age.message}</p>
        )}

        <div className="text-sm text-gray-500">
          {t('example')}
        </div>

        <StepNavigator />
      </form>
    </div>
  )
} 