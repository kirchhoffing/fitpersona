import { notFound } from 'next/navigation';
import { useMessages } from 'next-intl';
import { Metadata } from 'next';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { IntlProvider } from '@/components/i18n/IntlProvider';
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
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (!messages) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body className="bg-gray-900 text-white">
        <AuthProvider>
          <IntlProvider locale={locale} messages={messages}>
            <Header />
            <main>{children}</main>
          </IntlProvider>
        </AuthProvider>
      </body>
    </html>
  );
}