import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import {isLocale} from '@/i18n/routing';
import {getPageMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getPageMetadata(locale, '');
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const hero = await getTranslations({locale, namespace: 'hero'});
  const home = await getTranslations({locale, namespace: 'home'});

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{hero('eyebrow')}</div>
            <h1>{hero('title')}</h1>
            <p>{hero('description')}</p>
            <div className="actions">
              <Link className="button primary" href="/portfolio">
                {hero('portfolio')}
              </Link>
              <Link className="button" href="/contact">
                {hero('contact')}
              </Link>
            </div>
          </div>
          <div className="stone-panel" aria-label="Natural stone texture" />
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>{home('sectionTitle')}</h2>
          <p>{home('sectionText')}</p>
        </div>
        <div className="service-list">
          <div className="service-item">{home('services.churches')}</div>
          <div className="service-item">{home('services.altars')}</div>
          <div className="service-item">{home('services.sculptures')}</div>
          <div className="service-item">{home('services.fireplaces')}</div>
        </div>
      </section>
    </main>
  );
}
