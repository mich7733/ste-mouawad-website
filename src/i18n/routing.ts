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

export function isLocale(locale: string): locale is Locale {
  return (routing.locales as readonly string[]).includes(locale);
}
