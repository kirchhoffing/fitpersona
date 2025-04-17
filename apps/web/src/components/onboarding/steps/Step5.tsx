import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  goal: 'lose_weight' | 'gain_muscle' | 'maintain_fitness'
}

export function Step5() {
  const { goal, setGoal } = useOnboardingStore()

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[5]),
    defaultValues: { goal: goal || undefined },
  })

  const onSubmit = (data: FormData) => {
    setGoal(data.goal)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hedefiniz nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Lose Weight Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              goal === 'lose_weight'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="goal"
              value="lose_weight"
              className="sr-only"
              onChange={() => setGoal('lose_weight')}
              checked={goal === 'lose_weight'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">🏃‍♂️</div>
              <span className="font-medium block mb-2">Zayıflamak</span>
              <p className="text-sm text-gray-600">
                Kilo vermek ve yağ yakmak istiyorum
              </p>
            </div>
          </label>

          {/* Gain Muscle Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              goal === 'gain_muscle'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="goal"
              value="gain_muscle"
              className="sr-only"
              onChange={() => setGoal('gain_muscle')}
              checked={goal === 'gain_muscle'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">💪</div>
              <span className="font-medium block mb-2">Kas Kazanmak</span>
              <p className="text-sm text-gray-600">
                Kas kütlesi artırmak ve güç kazanmak istiyorum
              </p>
            </div>
          </label>

          {/* Maintain Fitness Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              goal === 'maintain_fitness'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="goal"
              value="maintain_fitness"
              className="sr-only"
              onChange={() => setGoal('maintain_fitness')}
              checked={goal === 'maintain_fitness'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <span className="font-medium block mb-2">Formda Kalmak</span>
              <p className="text-sm text-gray-600">
                Mevcut formumu korumak ve sağlıklı kalmak istiyorum
              </p>
            </div>
          </label>
        </div>

        {errors.goal && (
          <p className="text-red-500 text-sm mt-2">{errors.goal.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
} 