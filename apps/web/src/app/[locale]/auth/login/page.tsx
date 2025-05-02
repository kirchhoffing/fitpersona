'use client';

import { useTranslations } from 'next-intl';
import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  const t = useTranslations('auth');

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 border border-white/20">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
            {t('loginTitle')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            {t('loginSubtitle')}
          </p>
          <p className="mt-2 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="register" className="font-medium text-blue-500 hover:text-blue-400">
              Register now
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
