import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'
import { Mars, Venus, NonBinary } from 'lucide-react'

type FormData = { gender: 'male' | 'female' | 'other' }

export function Step1() {
  const { gender: initialGender, setGender, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.gender')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[1]),
    // initialGender null değilse { gender: ... }, aksi takdirde boş obje
    defaultValues: initialGender != null 
      ? { gender: initialGender } 
      : {},
  })
  

  // Eğer kullanıcının seçimini anlık store'a da yansıtmak istersen:
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.gender) setGender(value.gender)
    })
    return () => subscription.unsubscribe()
  }, [watch, setGender])

  const selected = watch('gender')

  const options: {
    value: FormData['gender']
    Icon: React.ComponentType<{ className?: string }>
    label: string
  }[] = [
    { value: 'male',   Icon: Mars,      label: t('male')   },
    { value: 'female', Icon: Venus,     label: t('female') },
    { value: 'other',  Icon: NonBinary, label: t('other')  },
  ]

  const onSubmit = (data: FormData) => {
    // Save to store and advance to next step
    setGender(data.gender)
    nextStep()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">{t('title')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {options.map(({ value, Icon, label }) => (
            <label
              key={value}
              className={`flex flex-col items-center justify-center w-full p-6 border-2 rounded-lg cursor-pointer transition-all ${
                selected === value
                  ? 'border-blue-500 bg-green-600'
                  : 'border-gray-700 hover:border-blue-700 bg-gray-700/50'
              }`}
            >
              <input
                {...register('gender')}
                type="radio"
                value={value}
                className="sr-only"
              />
              <Icon className="text-4xl mb-3" />
              <span className="font-medium text-white">{label}</span>
            </label>
          ))}
        </div>

        {errors.gender && (
          <p className="text-red-400 text-sm">{errors.gender.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
}
