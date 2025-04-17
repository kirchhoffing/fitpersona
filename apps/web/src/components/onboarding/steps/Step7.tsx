import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useOnboardingStore } from '@/store/onboardingStore'
import { stepSchemas } from '@/schemas/onboardingSchema'
import { StepNavigator } from '../StepNavigator'

type FormData = {
  equipment: 'body_weight' | 'home_equipment' | 'gym'
}

export function Step7() {
  const { equipment, setEquipment } = useOnboardingStore()

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[7]),
    defaultValues: { equipment: equipment || undefined },
  })

  const onSubmit = (data: FormData) => {
    setEquipment(data.equipment)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ekipman durumunuz nedir?</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Body Weight Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              equipment === 'body_weight'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="equipment"
              value="body_weight"
              className="sr-only"
              onChange={() => setEquipment('body_weight')}
              checked={equipment === 'body_weight'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">🧘‍♂️</div>
              <span className="font-medium block mb-2">Vücut Ağırlığı</span>
              <p className="text-sm text-gray-600">
                Sadece vücut ağırlığımı kullanarak egzersiz yapabilirim
              </p>
            </div>
          </label>

          {/* Home Equipment Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              equipment === 'home_equipment'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="equipment"
              value="home_equipment"
              className="sr-only"
              onChange={() => setEquipment('home_equipment')}
              checked={equipment === 'home_equipment'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">🏠</div>
              <span className="font-medium block mb-2">Ev Ekipmanı</span>
              <p className="text-sm text-gray-600">
                Evde dambıl, direnç bandı gibi temel ekipmanlarım var
              </p>
            </div>
          </label>

          {/* Gym Option */}
          <label
            className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all ${
              equipment === 'gym'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            <input
              type="radio"
              name="equipment"
              value="gym"
              className="sr-only"
              onChange={() => setEquipment('gym')}
              checked={equipment === 'gym'}
            />
            <div className="text-center">
              <div className="text-4xl mb-3">🏋️‍♂️</div>
              <span className="font-medium block mb-2">Spor Salonu</span>
              <p className="text-sm text-gray-600">
                Spor salonuna erişimim var ve profesyonel ekipmanları kullanabilirim
              </p>
            </div>
          </label>
        </div>

        {errors.equipment && (
          <p className="text-red-500 text-sm mt-2">{errors.equipment.message}</p>
        )}

        <StepNavigator />
      </form>
    </div>
  )
} 