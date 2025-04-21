import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(
  (async ({ requestLocale }: { requestLocale: string }) => {
    const locale = routing.locales.includes(requestLocale)
      ? requestLocale
      : routing.defaultLocale;

    const messages = (await import(`@/messages/${locale}.json`)).default;

    return {
      locale,
      messages
    };
  }) as any // TS hatasını kırıyoruz
);
