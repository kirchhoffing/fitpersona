declare module 'next-intl/server' {
  export function getTranslations(namespace?: string): Promise<(key: string) => string>;
  export function getRequestConfig(config: {
    locale: string;
  }): Promise<{
    messages: Record<string, any>;
  }>;
} 