import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {isLocale} from '@/i18n/routing';
import {getPageMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getPageMetadata(locale, '/contact', 'contact');
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'contact'});

  return (
    <main className="main">
      <header className="page-header">
        <h1>{t('title')}</h1>
        <p>{t('intro')}</p>
      </header>
      <section className="split">
        <form className="contact-form">
          <label className="field">
            <span>{t('name')}</span>
            <input name="name" autoComplete="name" />
          </label>
          <label className="field">
            <span>{t('email')}</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label className="field">
            <span>{t('message')}</span>
            <textarea name="message" />
          </label>
          <button className="button primary" type="submit">
            {t('submit')}
          </button>
        </form>
        <p>{t('details')}</p>
      </section>
    </main>
  );
}
