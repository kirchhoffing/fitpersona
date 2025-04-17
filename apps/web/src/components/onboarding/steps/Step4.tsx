import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  weight: number
}

export function Step4() {
  const { weight, setWeight } = useOnboardingStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[4]),
    defaultValues: { weight: weight || undefined },
  })

  const onSubmit = (data: FormData) => {
    setWeight(data.weight)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Kilonuz nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <input
            type="number"
            {...register('weight', { valueAsNumber: true })}
            placeholder="Kilonuzu kg cinsinden girin"
            className={`w-full p-4 border-2 rounded-lg ${
              errors.weight ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            min={30}
            max={300}
            step={0.1}
          />
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            kg
          </div>
        </div>

        {errors.weight && (
          <p className="text-red-500 text-sm mt-2">{errors.weight.message}</p>
        )}

        <div className="text-sm text-gray-500">
          Örnek: 75.5 kg
        </div>

        <StepNavigator />
      </form>
    </div>
  )
} 