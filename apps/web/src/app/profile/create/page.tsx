'use client';

import { useTranslations } from 'next-intl';
import ProfileForm from '@/components/profile/ProfileForm';

export default function CreateProfilePage() {
  const t = useTranslations('profile.create');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">{t('title')}</h1>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
} 