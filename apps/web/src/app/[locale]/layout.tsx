import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import '../globals.css';

export const metadata: Metadata = {
  title: "FitPersona - Home",
  description: "Your personal fitness companion",
};

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
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (!messages) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body className="bg-gray-900 text-white">
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 