// src/i18n/utils.ts
export function hasLocale(locales: string[], locale?: string | null): locale is string {
    return typeof locale === 'string' && locales.includes(locale);
  }
  