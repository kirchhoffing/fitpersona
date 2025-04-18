'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Index');
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract current locale from pathname
  const currentLocale = pathname.split('/')[1];

  const handleGetStarted = () => {
    router.push(`/${currentLocale}/onboarding`);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start pt-20 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-white">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {t('description')}
        </p>
        <button 
          onClick={handleGetStarted}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          {t('getStarted')}
        </button>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Track Progress */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="text-blue-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3 text-white">{t('features.track.title')}</h2>
          <p className="text-gray-400">{t('features.track.description')}</p>
        </div>

        {/* Workout Plans */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="text-purple-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3 text-white">{t('features.plans.title')}</h2>
          <p className="text-gray-400">{t('features.plans.description')}</p>
        </div>

        {/* Community */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="text-pink-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3 text-white">{t('features.community.title')}</h2>
          <p className="text-gray-400">{t('features.community.description')}</p>
        </div>
      </div>
    </div>
  );
} 