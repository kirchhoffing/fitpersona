import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  birthYear: number
}

export function Step2() {
  const { birthYear, setBirthYear } = useOnboardingStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[2]),
    defaultValues: { birthYear: birthYear || undefined },
  })

  const onSubmit = (data: FormData) => {
    setBirthYear(data.birthYear)
  }

  // Generate birth years from 1900 to current year
  const currentYear = new Date().getFullYear()
  const birthYears = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  )

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Doğum yılınız nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <select
            {...register('birthYear', { valueAsNumber: true })}
            className={`w-full p-4 border-2 rounded-lg appearance-none bg-white ${
              errors.birthYear ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            defaultValue={birthYear || ''}
          >
            <option value="" disabled>
              Doğum yılınızı seçin
            </option>
            {birthYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {errors.birthYear && (
          <p className="text-red-500 text-sm mt-2">{errors.birthYear.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
} 