import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { useTranslations } from 'next-intl'
import { StepNavigator } from '../StepNavigator'

type FormData = { dietaryPreferences: string[] }

export function Step9() {
  const { dietaryPreferences, setDietaryPreferences, nextStep } = useOnboardingStore()
  const t = useTranslations('onboarding.steps.health')

  const healthConditions = [
    { id: 'back_pain',       label: t('back_pain') },
    { id: 'neck_pain',       label: t('neck_pain') },
    { id: 'knee_problem',    label: t('knee_problem') },
    { id: 'shoulder_pain',   label: t('shoulder_pain') },
    { id: 'diabetes',        label: t('diabetes') },
    { id: 'heart_condition', label: t('heart_condition') },
    { id: 'high_blood_pressure', label: t('high_blood_pressure') },
    { id: 'asthma',          label: t('asthma') },
    { id: 'gluten_allergy',  label: t('gluten_allergy') },
    { id: 'lactose_intolerance', label: t('lactose_intolerance') },
    { id: 'nut_allergy',     label: t('nut_allergy') },
    { id: 'pregnancy',       label: t('pregnancy') },
  ]

  // Use the array directly or default to empty array
  const defaults = dietaryPreferences || []
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[9]),
    defaultValues: { dietaryPreferences: defaults },
  })

  const selected = watch('dietaryPreferences') || []

  const onSubmit = handleSubmit((data) => {
    // Pass the array directly to the store
    setDietaryPreferences(data.dietaryPreferences)
    nextStep()
  })

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('title')}
      </h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthConditions.map(({ id, label }) => (
            <label
              key={id}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selected.includes(id)
                  ? 'border-blue-600 bg-green-600'
                  : 'border-gray-700 hover:border-blue-700 bg-gray-700/50'
              }`}
            >
              <input
                {...register('dietaryPreferences')}
                type="checkbox"
                value={id}
                className="sr-only"
              />
              <span className="font-medium text-white">{label}</span>
              {selected.includes(id) && (
                <svg
                  className="w-5 h-5 text-blue-600 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
                      011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </label>
          ))}
        </div>

        {errors.dietaryPreferences && (
          <p className="text-red-400 text-sm">{errors.dietaryPreferences.message}</p>
        )}

        <p className="text-sm text-gray-400">
          {t('description')}
        </p>

        <StepNavigator />
      </form>
    </div>
  )
}
