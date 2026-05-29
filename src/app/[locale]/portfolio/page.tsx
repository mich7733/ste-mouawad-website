import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';
import {getPageMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return getPageMetadata(locale, '/portfolio', 'portfolio');
}

export default async function PortfolioPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'portfolio'});

  return (
    <main className="main">
      <header className="page-header">
        <h1>{t('title')}</h1>
      </header>
      <section className="content-block">
        <p>{t('intro')}</p>
      </section>
    </main>
  );
}
