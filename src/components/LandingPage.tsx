'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import type {ReactNode} from 'react';
import {useState} from 'react';

const WHATSAPP_URL = 'https://wa.me/96100000000';
const INSTAGRAM_URL = 'https://www.instagram.com/ste.mouawad/';
const FACEBOOK_URL = 'https://www.facebook.com/Ste.Mouawad/';

const projectImages = [
  {key: 'churches', src: '/images/projects/churches.webp'},
  {key: 'altars', src: '/images/projects/altars-choirs.webp'},
  {key: 'sculptures', src: '/images/projects/sculptures.webp'},
  {key: 'fireplaces', src: '/images/projects/fireplaces.webp'}
] as const;

const instagramImages = Array.from({length: 6}, (_, index) => `/images/instagram/instagram-${index + 1}.webp`);

function Icon({name, className = 'h-5 w-5'}: {name: string; className?: string}) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true
  };

  const paths: Record<string, ReactNode> = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.3" />
        <path d="M17.4 6.6h.01" />
      </>
    ),
    facebook: <path d="M14 8h2V4h-3a4 4 0 0 0-4 4v3H7v4h2v5h4v-5h3l1-4h-4V8a1 1 0 0 1 1-1Z" />,
    whatsapp: (
      <>
        <path d="M4 20l1.1-4.1A8 8 0 1 1 8 18.8Z" />
        <path d="M9.4 8.8c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4l.8 1.9c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4 0 .7.4.8 1.3 1.7 2.2 2.1.3.2.5.2.7 0l.6-.7c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.4.4.6 0 .7-.5 1.6-1.2 1.9-.7.4-2.9.2-5.1-1.9-2.2-2-3.1-4.5-3-5.2.1-.5.5-1 .7-1.2Z" />
      </>
    ),
    pencil: (
      <>
        <path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10Z" />
        <path d="m13.5 7.5 3 3" />
      </>
    ),
    drawings: (
      <>
        <path d="M4 20h16" />
        <path d="m6 17 5-12 7 12Z" />
        <path d="M11 12h4" />
      </>
    ),
    stone: (
      <>
        <rect x="4" y="14" width="6" height="5" rx="1" />
        <rect x="10" y="14" width="6" height="5" rx="1" />
        <rect x="16" y="14" width="4" height="5" rx="1" />
        <rect x="7" y="9" width="6" height="5" rx="1" />
        <rect x="13" y="9" width="6" height="5" rx="1" />
      </>
    ),
    hammer: (
      <>
        <path d="m14 5 5 5" />
        <path d="M3 21 14 10" />
        <path d="m12 3 9 9" />
        <path d="M8 7 5 4" />
      </>
    ),
    church: (
      <>
        <path d="M12 3v18" />
        <path d="M9 6h6" />
        <path d="m5 21 1-9 6-5 6 5 1 9" />
        <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    lebanon: <path d="M12 3c-3 4-5 7-5 10a5 5 0 0 0 10 0c0-3-2-6-5-10Z" />,
    diamond: (
      <>
        <path d="M6 3h12l4 6-10 12L2 9Z" />
        <path d="m2 9 20 0M8 3l4 18 4-18" />
      </>
    )
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function CtaButton({
  href,
  children,
  variant = 'solid',
  icon
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline';
  icon?: string;
}) {
  const classes =
    variant === 'solid'
      ? 'bg-mouawad-red text-white shadow-[0_14px_30px_rgba(199,54,54,0.25)] hover:bg-[#aa2929]'
      : 'border border-white/75 text-white hover:bg-white hover:text-mouawad-charcoal';

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded px-7 py-3 text-xs font-extrabold uppercase tracking-[0.1em] transition ${classes}`}
    >
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
      {children}
    </a>
  );
}

export default function LandingPage() {
  const t = useTranslations();
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [lightbox, setLightbox] = useState<(typeof projectImages)[number] | null>(null);
  const otherLocale = isAr ? 'en' : 'ar';
  const orderedProcess = isAr
    ? ['install', 'craft', 'stone', 'drawings', 'design']
    : ['design', 'drawings', 'stone', 'craft', 'install'];
  const processIcons: Record<string, string> = {
    design: 'pencil',
    drawings: 'drawings',
    stone: 'stone',
    craft: 'hammer',
    install: 'church'
  };

  return (
    <main className="min-h-screen bg-mouawad-paper text-mouawad-charcoal">
      <section className="relative min-h-[780px] overflow-hidden bg-mouawad-charcoal text-white md:min-h-screen">
        <Image
          src="/images/hero/church-interior.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${isAr ? 'object-[58%_center]' : 'object-center'}`}
        />
        <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/86 via-black/42 to-black/10`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/38" />

        <header className="relative z-10 mx-auto flex w-full max-w-[1380px] items-center justify-between gap-5 px-5 py-5 md:px-9">
          <Link href={`/${locale}`} aria-label="STE. MOUAWAD" className="block shrink-0">
            <Image
              src="/images/logo/ste-mouawad-logo-white.png"
              alt="STE. MOUAWAD"
              width={250}
              height={86}
              className="h-16 w-auto object-contain md:h-20"
            />
          </Link>
          <nav className="flex items-center gap-2 text-sm font-semibold md:gap-5">
            <a className="hidden px-1 text-white/90 transition hover:text-white sm:inline" href={INSTAGRAM_URL}>
              {t('nav.instagram')}
            </a>
            <a className="hidden px-1 text-white/90 transition hover:text-white sm:inline" href={FACEBOOK_URL}>
              {t('nav.facebook')}
            </a>
            <Link className="px-2 text-white/90 transition hover:text-white" href={`/${otherLocale}`}>
              {t('nav.language')}
            </Link>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded bg-mouawad-red px-4 text-xs font-extrabold uppercase tracking-[0.07em] text-white shadow-lg transition hover:bg-[#aa2929]"
              href={WHATSAPP_URL}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              <span className="hidden sm:inline">{t('nav.whatsapp')}</span>
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[630px] max-w-[1380px] items-center px-5 pb-24 pt-8 md:min-h-[calc(100vh-112px)] md:px-9">
          <div className={`fade-in max-w-[700px] ${isAr ? 'md:mr-8' : 'md:ml-0'}`}>
            {t('hero.eyebrow') ? (
              <p className="mb-7 text-sm font-semibold tracking-[0.03em] text-[#e6c582] md:text-base">{t('hero.eyebrow')}</p>
            ) : null}
            <h1 className="font-display text-[3.65rem] font-black leading-[0.92] text-white drop-shadow-2xl md:text-[6.1rem] lg:text-[6.8rem]">
              {t('hero.title')}
            </h1>
            <p className="mt-7 max-w-[540px] text-lg font-semibold leading-8 text-white md:text-xl">{t('hero.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="#projects">{t('hero.work')}</CtaButton>
              <CtaButton href={WHATSAPP_URL} variant="outline" icon="whatsapp">
                {t('hero.whatsapp')}
              </CtaButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-8 text-sm font-extrabold uppercase tracking-[0.1em] text-white">
              <a className="inline-flex items-center gap-3 hover:text-mouawad-stone" href={INSTAGRAM_URL}>
                <Icon name="instagram" className="h-5 w-5" />
                {t('nav.instagram')}
              </a>
              <a className="inline-flex items-center gap-3 hover:text-mouawad-stone" href={FACEBOOK_URL}>
                <Icon name="facebook" className="h-5 w-5" />
                {t('nav.facebook')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-white px-5 py-16 md:px-9 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.08fr_1fr]">
          <div className="relative h-[315px] overflow-hidden rounded-sm shadow-soft md:h-[332px]">
            <Image src="/images/about/craftsman-carving.webp" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-mouawad-red">{t('heritage.eyebrow')}</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-tight md:text-6xl">{t('heritage.title')}</h2>
            <p className="mt-5 text-lg leading-8 text-[#312923]">{t('heritage.body1')}</p>
            <p className="mt-4 text-lg leading-8 text-[#312923]">{t('heritage.body2')}</p>
            <div className="mt-5 inline-block font-display text-2xl italic text-[#4f4139]">
              {t('heritage.signature')}
              <span className="mt-2 block h-px w-12 bg-mouawad-red" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#fbfaf7] px-5 py-12 md:px-9 md:py-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex items-center gap-5">
            <span className="h-px flex-1 bg-black/14" />
            <h2 className="text-center font-display text-3xl font-bold uppercase tracking-[0.05em] text-mouawad-red md:text-4xl">{t('projects.title')}</h2>
            <span className="h-px flex-1 bg-black/14" />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs font-extrabold uppercase tracking-[0.04em]">
            <span className="rounded-full bg-mouawad-red px-6 py-2 text-white">{t('projects.all')}</span>
            {projectImages.map((project) => (
              <span key={project.key} className="px-2 py-2">
                {t(`projects.${project.key}`)}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {projectImages.map((project) => (
              <button
                key={project.key}
                type="button"
                onClick={() => setLightbox(project)}
                className="group relative h-[255px] overflow-hidden bg-black text-start text-white shadow-[0_18px_45px_rgba(23,20,17,0.13)] outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(23,20,17,0.2)] md:h-[245px]"
              >
                <Image src={project.src} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-black/5 transition group-hover:bg-black/0" />
                <span className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/84 to-transparent" />
                <span className="absolute bottom-5 px-5 text-lg font-extrabold uppercase tracking-[0.05em]">{t(`projects.${project.key}`)}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href={INSTAGRAM_URL} className="inline-flex min-h-10 items-center rounded bg-mouawad-red px-6 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#aa2929]">
              {t('projects.more')}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-9 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-5">
            <span className="h-px flex-1 bg-black/14" />
            <h2 className="text-center font-display text-3xl font-bold uppercase tracking-[0.05em] text-mouawad-red md:text-4xl">{t('process.title')}</h2>
            <span className="h-px flex-1 bg-black/14" />
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-5">
            {orderedProcess.map((step, index) => (
              <div key={step} className="relative flex items-center justify-center">
                <div className="flex min-h-[118px] w-full flex-col items-center justify-center gap-3 text-center text-[#1f1b18]">
                  <Icon name={processIcons[step]} className="h-12 w-12 text-[#1f1b18]" />
                  <p className="text-xs font-bold uppercase leading-4 tracking-[0.04em]">{t(`process.${step}`)}</p>
                </div>
                {index < orderedProcess.length - 1 ? (
                  <span className={`hidden text-3xl text-[#8d7c6b] md:absolute md:block ${isAr ? '-left-2 rotate-180' : '-right-2'}`}>→</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stone-paper px-5 py-12 md:px-9 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[250px_1fr]">
          <div>
            <h2 className="font-display text-3xl font-medium uppercase leading-none md:text-4xl">{t('instagram.title')}</h2>
            <p className="mt-5 max-w-[280px] text-sm leading-6">{t('instagram.text')}</p>
            <a href={INSTAGRAM_URL} className="mt-6 inline-flex min-h-10 items-center gap-2 rounded bg-mouawad-red px-5 text-xs font-extrabold uppercase tracking-[0.07em] text-white transition hover:bg-[#aa2929]">
              <Icon name="instagram" className="h-4 w-4" />
              {t('instagram.button')}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
            {instagramImages.slice(0, 5).map((src, index) => (
              <div key={src} className="relative h-40 overflow-hidden rounded-sm bg-stone-200 shadow-sm md:h-44">
                <Image src={src} alt="" fill sizes="(min-width: 768px) 14vw, 50vw" className="object-cover" />
              </div>
            ))}
            <a href={INSTAGRAM_URL} className="flex h-40 flex-col items-center justify-center border border-black/8 bg-white/75 text-center shadow-sm transition hover:bg-white md:h-44">
              <Icon name="instagram" className="h-7 w-7" />
              <span className="mt-3 text-xs font-bold">{t('instagram.handle')}</span>
              <span className="mt-1 text-xs">{t('instagram.caption')}</span>
              <span className="mt-3 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="stone-paper border-y border-black/8 px-5 py-12 md:px-9 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-7 text-center md:grid-cols-4">
          {[
            ['calendar', t('trust.sinceLabel'), t('trust.sinceValue'), t('trust.sinceText')],
            ['church', '', t('trust.projectsValue'), t('trust.projectsLabel')],
            ['lebanon', '', t('trust.lebanonValue'), t('trust.lebanonLabel')],
            ['diamond', '', t('trust.craftValue'), t('trust.craftLabel')]
          ].map(([icon, label, value, detail], index) => (
            <div key={value} className={`px-5 ${index > 0 ? 'md:border-s md:border-black/18' : ''}`}>
              <Icon name={icon} className="mx-auto h-10 w-10 text-[#8f5a20]" />
              {label ? <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em]">{label}</p> : null}
              <p className="mt-1 font-display text-2xl font-black uppercase leading-tight">{value}</p>
              <p className="mt-2 text-sm text-[#4d443d]">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-14 text-center text-white md:px-9 md:py-16">
        <Image src="/images/hero/marble-carving.webp" alt="" width={520} height={292} className="absolute bottom-0 hidden h-full w-72 object-cover opacity-45 md:left-0 md:block" />
        <Image src="/images/hero/marble-detail.webp" alt="" width={520} height={292} className="absolute bottom-0 hidden h-full w-72 object-cover opacity-45 md:right-0 md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">{t('cta.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">{t('cta.text')}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <CtaButton href={WHATSAPP_URL} icon="whatsapp">
              {t('cta.whatsapp')}
            </CtaButton>
            <CtaButton href={INSTAGRAM_URL} variant="outline" icon="instagram">
              {t('cta.instagram')}
            </CtaButton>
            <CtaButton href={FACEBOOK_URL} variant="outline" icon="facebook">
              {t('cta.facebook')}
            </CtaButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#161616] px-5 py-4 text-xs text-white/75 md:px-9">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo/ste-mouawad-logo-white.png"
              alt="STE. MOUAWAD"
              width={120}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <p>{t('footer.copyright')}</p>
          </div>
          <div className="flex items-center gap-3">
            <span>{t('footer.crafted')}</span>
            <span className="inline-grid h-4 w-6 place-items-center rounded-[2px] bg-white text-[10px]">🇱🇧</span>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        aria-label={t('nav.whatsapp')}
        className={`fixed bottom-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mouawad-red text-white shadow-[0_16px_36px_rgba(0,0,0,0.32)] transition hover:-translate-y-1 hover:bg-[#aa2929] ${isAr ? 'left-5' : 'right-5'}`}
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/82 p-5"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/40 text-2xl text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-sm bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <Image src={lightbox.src} alt={t(`projects.${lightbox.key}`)} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </main>
  );
}
