'use client';

import {useEffect} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname, useRouter} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';

const navItems = [
  {href: '/', label: 'home'},
  {href: '/about', label: 'about'},
  {href: '/portfolio', label: 'portfolio'},
  {href: '/projects', label: 'projects'},
  {href: '/contact', label: 'contact'}
] as const;

export function Header({locale}: {locale: Locale}) {
  const t = useTranslations('nav');
  const meta = useTranslations('meta');
  const router = useRouter();
  const pathname = usePathname();
  const targetLocale = locale === 'ar' ? 'en' : 'ar';

  useEffect(() => {
    const preferred = window.localStorage.getItem('preferred-locale') as Locale | null;
    if (preferred && preferred !== locale && pathname === '/') {
      router.replace(pathname, {locale: preferred});
    }
  }, [locale, pathname, router]);

  function switchLanguage() {
    window.localStorage.setItem('preferred-locale', targetLocale);
    router.push(pathname, {locale: targetLocale});
  }

  return (
    <header className="topbar">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" locale={locale}>
          <span>{meta('siteName')}</span>
          <small>1967</small>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {t(item.label)}
            </Link>
          ))}
          <button className="language-toggle" type="button" onClick={switchLanguage}>
            {t('language')}
          </button>
        </div>
      </nav>
    </header>
  );
}
