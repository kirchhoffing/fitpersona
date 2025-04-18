declare module 'next-intl' {
  import * as React from 'react';

  export const NextIntlClientProvider: React.FC<{
    locale: string;
    messages: Record<string, any>;
    now?: Date;
    timeZone?: string;
    children: React.ReactNode;
  }>;

  // Opsiyonel diğer export'lar (hata almamak için)
  export function useTranslations(namespace?: string): (key: string) => string;
  export function useLocale(): string;
  export function useMessages(): Record<string, any>;
}
