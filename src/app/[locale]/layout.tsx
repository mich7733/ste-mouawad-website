import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {Inter, Playfair_Display} from 'next/font/google';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';
import {routing, type Locale} from '@/i18n/routing';
import '../../../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});
  const canonical = `https://stemouawad.com/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://stemouawad.com'),
    alternates: {
      canonical,
      languages: {
        en: '/en',
        ar: '/ar'
      }
    },
    keywords: [
      'STE. MOUAWAD',
      'شركة معوض',
      'Marble Lebanon',
      'Church Marble Lebanon',
      'Artistic Marble Work',
      'Luxury marble atelier',
      'Church altars Lebanon',
      'Marble sculptures Lebanon',
      'Fireplaces Lebanon'
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonical,
      siteName: 'STE. MOUAWAD',
      locale,
      type: 'website',
      images: [
        {
          url: '/images/hero/church-interior.webp',
          width: 1200,
          height: 630,
          alt: 'STE. MOUAWAD church marble craftsmanship'
        }
      ]
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
