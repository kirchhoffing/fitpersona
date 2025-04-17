'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const languages = [
  {
    code: 'en',
    name: 'EN',
    flag: '/flags/us.svg'
  },
  {
    code: 'tr',
    name: 'TR',
    flag: '/flags/tr.svg'
  },
  {
    code: 'de',
    name: 'DE',
    flag: '/flags/de.svg'
  }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
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
              ? 'bg-primary-100 text-primary-700'
              : 'hover:bg-gray-100'
          }`}
        >
          <Image
            src={lang.flag}
            alt={lang.name}
            width={20}
            height={15}
            className="rounded-sm"
          />
          <span className="text-sm font-bold text-black">{lang.name}</span>
        </button>
      ))}
    </div>
  );
} 