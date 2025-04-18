// src/i18n/routing.ts
interface RoutingConfig {
  locales: string[];
  defaultLocale: string;
}

export const routing: RoutingConfig = {
  locales: ['en', 'tr', 'de'],
  defaultLocale: 'en'
};
  