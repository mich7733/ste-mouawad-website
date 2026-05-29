import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/portfolio': '/portfolio',
    '/projects': '/projects',
    '/contact': '/contact'
  }
});

export type Locale = (typeof routing.locales)[number];
