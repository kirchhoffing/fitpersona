import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'
import { useTranslations } from 'next-intl'

type FormData = {
  gender: 'male' | 'female' | 'other'
}

export function Step1() {
  const { gender, setGender } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.gender')

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[1]),
    defaultValues: { gender: gender || undefined },
  })

  const onSubmit = (data: FormData) => {
    setGender(data.gender)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">{t('title')}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {/* Male Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              gender === 'male'
                ? 'border-blue-500 bg-blue-900/30'
                : 'border-gray-700 hover:border-blue-700 bg-gray-700/50'
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="male"
              className="sr-only"
              onChange={() => setGender('male')}
              checked={gender === 'male'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">👨</div>
              <span className="font-medium text-gray-200">{t('male')}</span>
            </div>
          </label>

          {/* Female Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              gender === 'female'
                ? 'border-blue-500 bg-blue-900/30'
                : 'border-gray-700 hover:border-blue-700 bg-gray-700/50'
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="female"
              className="sr-only"
              onChange={() => setGender('female')}
              checked={gender === 'female'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">👩</div>
              <span className="font-medium text-gray-200">{t('female')}</span>
            </div>
          </label>

          {/* Other Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              gender === 'other'
                ? 'border-blue-500 bg-blue-900/30'
                : 'border-gray-700 hover:border-blue-700 bg-gray-700/50'
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="other"
              className="sr-only"
              onChange={() => setGender('other')}
              checked={gender === 'other'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">🧑</div>
              <span className="font-medium text-gray-200">{t('other')}</span>
            </div>
          </label>
        </div>

        {errors.gender && (
          <p className="text-red-400 text-sm mt-2">{errors.gender.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
} 