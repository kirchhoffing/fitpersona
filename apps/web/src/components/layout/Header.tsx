'use client';

import { useSession, signOut } from 'next-auth/react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const t = useTranslations('header');
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check if user has completed onboarding when session changes
    if (session?.user?.id) {
      fetch('/api/user/onboarding-status')
        .then(res => res.json())
        .then(data => {
          setHasCompletedOnboarding(data.completed);
        })
        .catch(err => {
          console.error('Error checking onboarding status:', err);
          setHasCompletedOnboarding(false);
        });
    } else {
      setHasCompletedOnboarding(null);
    }
  }, [session]);

  const handleLogoClick = () => {
    router.push(`/${currentLocale}`);
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push(`/${currentLocale}`);
  };

  const handleDashboardClick = () => {
    router.push(`/${currentLocale}/dashboard`);
  };

  const handleOnboardingClick = () => {
    router.push(`/${currentLocale}/onboarding`);
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Auth buttons or user info */}
          <div className="flex items-center space-x-4">
            {status === 'authenticated' ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {session.user.name ? session.user.name[0].toUpperCase() : session.user.email?.[0].toUpperCase()}
                  </div>
                  <span className="text-white font-medium">
                    {(() => {
                      const name = session.user.name;
                      if (name) return name;
                      return session.user.email;
                    })()}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('logout')}
                </button>

              </>
            ) : (
              <>
                <Link
                  href={`/${currentLocale}/auth/login`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t('login')}
                </Link>
                <Link
                  href={`/${currentLocale}/auth/register`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t('register')}
                </Link>
              </>
            )}
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={`/${currentLocale}`}
              className="text-xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors no-underline"
            >
              FitPersona
            </Link>
          </div>

          {/* Right side - Language switcher */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}