import { useOnboardingStore } from '@/store/onboardingStore'

export function StepNavigator() {
  const { currentStep, totalSteps, nextStep, prevStep } = useOnboardingStore()

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Geri
        </button>

        <span className="text-sm text-gray-500">
          Adım {currentStep} / {totalSteps}
        </span>

        <button
          onClick={nextStep}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {currentStep === totalSteps ? 'Tamamla' : 'İleri'}
        </button>
      </div>
    </div>
  )
} 