import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  gender: 'male' | 'female' | 'other'
}

export function Step1() {
  const { gender, setGender } = useOnboardingStore()

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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cinsiyetiniz nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {/* Male Option */}
          <label
            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
              gender === 'male'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
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
              <div className="text-4xl mb-2">👨</div>
              <span className="font-medium">Erkek</span>
            </div>
          </label>

          {/* Female Option */}
          <label
            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
              gender === 'female'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
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
              <div className="text-4xl mb-2">👩</div>
              <span className="font-medium">Kadın</span>
            </div>
          </label>

          {/* Other Option */}
          <label
            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
              gender === 'other'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
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
              <div className="text-4xl mb-2">🧑</div>
              <span className="font-medium">Diğer</span>
            </div>
          </label>
        </div>

        {errors.gender && (
          <p className="text-red-500 text-sm mt-2">{errors.gender.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
} 