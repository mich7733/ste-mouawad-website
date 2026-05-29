import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';
import {routing} from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ste-mouawad.com';

type PageNamespace = 'about' | 'portfolio' | 'projects' | 'contact';

export async function getPageMetadata(
  locale: Locale,
  pathname: '' | '/about' | '/portfolio' | '/projects' | '/contact',
  namespace?: PageNamespace
): Promise<Metadata> {
  const meta = await getTranslations({locale, namespace: 'meta'});
  const page = namespace ? await getTranslations({locale, namespace}) : null;
  const localizedPath = locale === routing.defaultLocale ? pathname || '/' : `/ar${pathname}`;
  const enPath = pathname || '/';
  const arPath = `/ar${pathname}`;
  const title = page ? `${page('title')} | ${meta('siteName')}` : meta('title');
  const description = page ? page('metaDescription') : meta('description');

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${localizedPath}`,
      languages: {
        en: `${siteUrl}${enPath}`,
        ar: `${siteUrl}${arPath}`
      }
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${localizedPath}`,
      siteName: meta('siteName'),
      locale: locale === 'ar' ? 'ar_LB' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_LB',
      type: 'website'
    }
  };
}
