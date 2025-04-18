'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const languages = [
  {
    code: 'en',
    name: 'EN',
    flag: 'https://flagcdn.com/w40/gb.png'
  },
  {
    code: 'tr',
    name: 'TR',
    flag: 'https://flagcdn.com/w40/tr.png'
  },
  {
    code: 'de',
    name: 'DE',
    flag: 'https://flagcdn.com/w40/de.png'
  }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', locale);
    
    // Update the URL
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
            currentLocale === lang.code
              ? 'bg-primary-600 text-white'
              : 'hover:bg-gray-700'
          }`}
        >
          <Image
            src={lang.flag}
            alt={lang.name}
            width={20}
            height={15}
            className="rounded-sm"
            unoptimized
          />
          <span className="text-sm font-bold text-white">{lang.name}</span>
        </button>
      ))}
    </div>
  );
} 