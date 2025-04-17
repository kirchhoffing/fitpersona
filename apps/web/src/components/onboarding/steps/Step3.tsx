import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  height: number
}

export function Step3() {
  const { height, setHeight } = useOnboardingStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[3]),
    defaultValues: { height: height || undefined },
  })

  const onSubmit = (data: FormData) => {
    setHeight(data.height)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Boyunuz nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <input
            type="number"
            {...register('height', { valueAsNumber: true })}
            placeholder="Boyunuzu cm cinsinden girin"
            className={`w-full p-4 border-2 rounded-lg ${
              errors.height ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            min={100}
            max={250}
            step={1}
          />
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            cm
          </div>
        </div>

        {errors.height && (
          <p className="text-red-500 text-sm mt-2">{errors.height.message}</p>
        )}

        <div className="text-sm text-gray-500">
          Örnek: 175 cm
        </div>

        <StepNavigator />
      </form>
    </div>
  )
} 