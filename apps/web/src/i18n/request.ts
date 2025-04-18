// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig({
  locale: routing.defaultLocale,
  messages: async (locale: string) => {
    if (!routing.locales.includes(locale)) {
      locale = routing.defaultLocale;
    }
    return (await import(`../../messages/${locale}.json`)).default;
  }
});
