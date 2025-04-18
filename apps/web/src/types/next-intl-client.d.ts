declare module 'next-intl/client' {
  export function useTranslations(namespace?: string): (key: string) => string;
  export function NextIntlClientProvider(props: {
    locale: string;
    messages: Record<string, any>;
    children: React.ReactNode;
  }): JSX.Element;
} 