'use client';

import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  return (
    <header className="bg-[#f5f5dc] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">FitPersona</h1>
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
} 