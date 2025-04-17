import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  dietaryPreferences: string
}

export function Step8() {
  const { dietaryPreferences, setDietaryPreferences } = useOnboardingStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[8]),
    defaultValues: { dietaryPreferences: dietaryPreferences || '' },
  })

  const onSubmit = (data: FormData) => {
    setDietaryPreferences(data.dietaryPreferences)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Diyet tercihleriniz veya alerjileriniz var mı?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <textarea
            {...register('dietaryPreferences')}
            placeholder="Örneğin: Vejetaryen, laktoz intoleransı, fıstık alerjisi..."
            className={`w-full p-4 border-2 rounded-lg min-h-[120px] ${
              errors.dietaryPreferences ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            maxLength={500}
          />
          
          <div className="absolute right-4 top-4 text-gray-400">
            {dietaryPreferences?.length || 0}/500
          </div>
        </div>

        {errors.dietaryPreferences && (
          <p className="text-red-500 text-sm mt-2">{errors.dietaryPreferences.message}</p>
        )}

        <div className="text-sm text-gray-500">
          Bu alan opsiyoneldir. Herhangi bir diyet tercihiniz veya alerjiniz yoksa boş bırakabilirsiniz.
        </div>

        <StepNavigator />
      </form>
    </div>
  )
} 