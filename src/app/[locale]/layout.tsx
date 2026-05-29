import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';
import {Header} from '@/components/Header';
import {isLocale, routing} from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ste-mouawad.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: 'meta'});
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${siteUrl}${prefix || '/'}`,
      languages: {
        en: `${siteUrl}/`,
        ar: `${siteUrl}/ar`
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${siteUrl}${prefix || '/'}`,
      siteName: t('siteName'),
      locale: locale === 'ar' ? 'ar_LB' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_LB',
      type: 'website'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const meta = await getTranslations({locale, namespace: 'meta'});

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="site-shell">
            <Header locale={locale} />
            {children}
            <footer className="footer">
              <div className="footer-inner">
                &copy; {new Date().getFullYear()} {meta('siteName')}.
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
