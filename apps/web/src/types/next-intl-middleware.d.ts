declare module 'next-intl/middleware' {
  export default function createMiddleware(config: {
    locales: string[];
    defaultLocale: string;
  }): any;
} 