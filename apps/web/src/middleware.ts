import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'tr', 'de'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match internationalized pathnames and auth routes
  matcher: ['/', '/(tr|en|de)/:path*', '/auth/:path*']
};