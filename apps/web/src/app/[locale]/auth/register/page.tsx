'use client';

import { useTranslations } from 'next-intl';
import { RegisterForm } from '@/components/auth/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  const t = useTranslations('auth');

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 border border-white/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {t('registerTitle')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            {t('registerSubtitle')}
          </p>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="login" className="font-medium text-blue-500 hover:text-blue-400">
              Login now
            </Link>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
