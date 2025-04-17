import { z } from 'zod'
import { Gender, Goal, ActivityLevel, Equipment } from '../store/onboardingStore'

// Current year for age validation
const currentYear = new Date().getFullYear()

export const onboardingSchema = z.object({
  // Step 1: Gender
  gender: z.enum(['male', 'female', 'other'] as const, {
    required_error: 'Lütfen cinsiyetinizi seçin',
  }),

  // Step 2: Birth Year
  birthYear: z.number()
    .min(1900, 'Geçerli bir doğum yılı girin')
    .max(currentYear, 'Geçerli bir doğum yılı girin'),

  // Step 3: Height
  height: z.number()
    .min(100, 'Boy 100cm\'den kısa olamaz')
    .max(250, 'Boy 250cm\'den uzun olamaz'),

  // Step 4: Weight
  weight: z.number()
    .min(30, 'Kilo 30kg\'dan az olamaz')
    .max(300, 'Kilo 300kg\'dan fazla olamaz'),

  // Step 5: Goal
  goal: z.enum(['lose_weight', 'gain_muscle', 'maintain_fitness'] as const, {
    required_error: 'Lütfen bir hedef seçin',
  }),

  // Step 6: Activity Level
  activityLevel: z.enum(['sedentary', 'lightly_active', 'active', 'very_active'] as const, {
    required_error: 'Lütfen aktivite düzeyinizi seçin',
  }),

  // Step 7: Equipment
  equipment: z.enum(['body_weight', 'home_equipment', 'gym'] as const, {
    required_error: 'Lütfen ekipman durumunuzu seçin',
  }),

  // Step 8: Dietary Preferences (optional)
  dietaryPreferences: z.string().max(500, 'En fazla 500 karakter girebilirsiniz').optional(),
})

// Type for the form data
export type OnboardingFormData = z.infer<typeof onboardingSchema>

// Individual step schemas for step-by-step validation
export const stepSchemas = {
  1: z.object({ gender: onboardingSchema.shape.gender }),
  2: z.object({ birthYear: onboardingSchema.shape.birthYear }),
  3: z.object({ height: onboardingSchema.shape.height }),
  4: z.object({ weight: onboardingSchema.shape.weight }),
  5: z.object({ goal: onboardingSchema.shape.goal }),
  6: z.object({ activityLevel: onboardingSchema.shape.activityLevel }),
  7: z.object({ equipment: onboardingSchema.shape.equipment }),
  8: z.object({ dietaryPreferences: onboardingSchema.shape.dietaryPreferences }),
} 