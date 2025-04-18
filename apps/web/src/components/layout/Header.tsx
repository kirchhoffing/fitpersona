'use client';

import LanguageSwitcher from '../LanguageSwitcher';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const handleLogoClick = () => {
    router.push(`/${currentLocale}`);
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 
              onClick={handleLogoClick}
              className="text-xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors"
            >
              FitPersona
            </h1>
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
} 