import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  activityLevel: 'sedentary' | 'lightly_active' | 'active' | 'very_active'
}

export function Step6() {
  const { activityLevel, setActivityLevel } = useOnboardingStore()

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[6]),
    defaultValues: { activityLevel: activityLevel || undefined },
  })

  const onSubmit = (data: FormData) => {
    setActivityLevel(data.activityLevel)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Aktivite düzeyiniz nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {/* Sedentary Option */}
          <label
            className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
              activityLevel === 'sedentary'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="sedentary"
              className="sr-only"
              onChange={() => setActivityLevel('sedentary')}
              checked={activityLevel === 'sedentary'}
            />
            <div className="flex items-center">
              <div className="text-2xl mr-4">🪑</div>
              <div>
                <span className="font-medium block">Sedanter</span>
                <p className="text-sm text-gray-600">
                  Çoğunlukla oturarak çalışıyorum ve çok az egzersiz yapıyorum
                </p>
              </div>
            </div>
          </label>

          {/* Lightly Active Option */}
          <label
            className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
              activityLevel === 'lightly_active'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="lightly_active"
              className="sr-only"
              onChange={() => setActivityLevel('lightly_active')}
              checked={activityLevel === 'lightly_active'}
            />
            <div className="flex items-center">
              <div className="text-2xl mr-4">🚶‍♂️</div>
              <div>
                <span className="font-medium block">Hafif Aktif</span>
                <p className="text-sm text-gray-600">
                  Haftada 1-3 gün hafif egzersiz yapıyorum veya günlük yürüyüş yapıyorum
                </p>
              </div>
            </div>
          </label>

          {/* Active Option */}
          <label
            className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
              activityLevel === 'active'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="active"
              className="sr-only"
              onChange={() => setActivityLevel('active')}
              checked={activityLevel === 'active'}
            />
            <div className="flex items-center">
              <div className="text-2xl mr-4">🏃‍♂️</div>
              <div>
                <span className="font-medium block">Aktif</span>
                <p className="text-sm text-gray-600">
                  Haftada 3-5 gün orta yoğunlukta egzersiz yapıyorum
                </p>
              </div>
            </div>
          </label>

          {/* Very Active Option */}
          <label
            className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
              activityLevel === 'very_active'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="very_active"
              className="sr-only"
              onChange={() => setActivityLevel('very_active')}
              checked={activityLevel === 'very_active'}
            />
            <div className="flex items-center">
              <div className="text-2xl mr-4">💪</div>
              <div>
                <span className="font-medium block">Çok Aktif</span>
                <p className="text-sm text-gray-600">
                  Haftada 6-7 gün yoğun egzersiz yapıyorum veya fiziksel işte çalışıyorum
                </p>
              </div>
            </div>
          </label>
        </div>

        {errors.activityLevel && (
          <p className="text-red-500 text-sm mt-2">{errors.activityLevel.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
} 