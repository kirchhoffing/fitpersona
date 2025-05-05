'use client';

import { NextIntlClientProvider } from 'next-intl';

export function IntlProvider({ 
  children, 
  locale, 
  messages 
}: { 
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages} 
      timeZone="UTC"
      onError={(error: any) => {
        // Only log missing messages in development, not in production
        if (process.env.NODE_ENV !== 'production' && error.code === 'MISSING_MESSAGE') {
          // Don't log undefined message IDs to avoid console spam
          if (error.messageId !== undefined) {
            console.warn(`Missing message: ${error.messageId}`);
          }
        }
        // Return empty string instead of throwing error for missing messages
        return '';
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
