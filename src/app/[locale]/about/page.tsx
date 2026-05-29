import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';
import {getPageMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return getPageMetadata(locale, '/about', 'about');
}

export default async function AboutPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'about'});

  return (
    <main className="main">
      <header className="page-header">
        <h1>{t('title')}</h1>
      </header>
      <section className="content-block">
        <p>{t('intro')}</p>
        <p>{t('body')}</p>
      </section>
    </main>
  );
}
