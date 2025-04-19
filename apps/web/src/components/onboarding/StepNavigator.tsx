import { useOnboardingStore } from '@/store/onboardingStore'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export function StepNavigator() {
  const { currentStep, totalSteps, nextStep, prevStep } = useOnboardingStore()
  const t = useTranslations('onboarding.navigation')

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          onClick={prevStep}
          disabled={currentStep === 1}
          variant={currentStep === 1 ? 'secondary' : 'outline'}
          className={currentStep === 1 ? 'cursor-not-allowed' : ''}
        >
          {t('back')}
        </Button>

        <span className="text-sm text-gray-400">
          Step {currentStep} / {totalSteps}
        </span>

        <Button
          onClick={nextStep}
          variant="default"
        >
          {currentStep === totalSteps ? t('complete') : t('next')}
        </Button>
      </div>
    </div>
  )
} 