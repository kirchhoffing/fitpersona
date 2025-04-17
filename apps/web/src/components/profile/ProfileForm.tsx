'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

const profileSchema = z.object({
  gender: z.enum(['male', 'female']),
  age: z.number().min(13).max(100),
  weight: z.number().min(30).max(300),
  height: z.number().min(100).max(250),
  goal: z.enum(['lose_weight', 'gain_muscle', 'maintain']),
  activityLevel: z.enum(['sedentary', 'light', 'moderate', 'active', 'very_active']),
  workoutLocation: z.enum(['home', 'gym']),
  equipment: z.array(z.string()).optional(),
  medicalConditions: z.array(z.string()).optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const equipmentOptions = [
  'dumbbells',
  'resistance_bands',
  'yoga_mat',
  'pull_up_bar',
  'kettlebell',
  'jump_rope',
  'none',
];

const medicalConditionOptions = [
  'hypertension',
  'diabetes',
  'heart_disease',
  'joint_problems',
  'back_pain',
  'none',
];

export default function ProfileForm() {
  const t = useTranslations('profile.create');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedMedicalConditions, setSelectedMedicalConditions] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const workoutLocation = watch('workoutLocation');

  const onSubmit = (data: ProfileFormData) => {
    console.log({
      ...data,
      equipment: selectedEquipment,
      medicalConditions: selectedMedicalConditions,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">{t('gender.label')}</label>
        <select
          {...register('gender')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="male">{t('gender.male')}</option>
          <option value="female">{t('gender.female')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('age.label')}</label>
        <input
          type="number"
          {...register('age', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('weight.label')}</label>
          <input
            type="number"
            {...register('weight', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('height.label')}</label>
          <input
            type="number"
            {...register('height', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('goal.label')}</label>
        <select
          {...register('goal')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="lose_weight">{t('goal.lose_weight')}</option>
          <option value="gain_muscle">{t('goal.gain_muscle')}</option>
          <option value="maintain">{t('goal.maintain')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('activityLevel.label')}</label>
        <select
          {...register('activityLevel')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="sedentary">{t('activityLevel.sedentary')}</option>
          <option value="light">{t('activityLevel.light')}</option>
          <option value="moderate">{t('activityLevel.moderate')}</option>
          <option value="active">{t('activityLevel.active')}</option>
          <option value="very_active">{t('activityLevel.very_active')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('workoutLocation.label')}</label>
        <select
          {...register('workoutLocation')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="home">{t('workoutLocation.home')}</option>
          <option value="gym">{t('workoutLocation.gym')}</option>
        </select>
      </div>

      {workoutLocation === 'home' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('equipment.label')}</label>
          <div className="mt-2 space-y-2">
            {equipmentOptions.map((equipment) => (
              <label key={equipment} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedEquipment.includes(equipment)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedEquipment([...selectedEquipment, equipment]);
                    } else {
                      setSelectedEquipment(selectedEquipment.filter((item) => item !== equipment));
                    }
                  }}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">{t(`equipment.${equipment}`)}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">{t('medicalConditions.label')}</label>
        <div className="mt-2 space-y-2">
          {medicalConditionOptions.map((condition) => (
            <label key={condition} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedMedicalConditions.includes(condition)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMedicalConditions([...selectedMedicalConditions, condition]);
                  } else {
                    setSelectedMedicalConditions(
                      selectedMedicalConditions.filter((item) => item !== condition)
                    );
                  }
                }}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">{t(`medicalConditions.${condition}`)}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {t('submit')}
        </button>
      </div>
    </form>
  );
} 