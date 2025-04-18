declare module 'next-intl' {
  export function useTranslations(namespace?: string): (key: string) => string;
  export function getTranslations(namespace?: string): Promise<(key: string) => string>;
} 