import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/layout/Header';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'de' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 