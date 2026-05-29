import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {isLocale} from '@/i18n/routing';
import {getProjects} from '@/lib/projects';
import {getPageMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getPageMetadata(locale, '/projects', 'projects');
}

export default async function ProjectsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'projects'});
  const projects = getProjects(locale);

  return (
    <main className="main">
      <header className="page-header">
        <h1>{t('title')}</h1>
        <p>{t('intro')}</p>
      </header>
      <section className="project-grid">
        {projects.length === 0 ? (
          <p>{t('empty')}</p>
        ) : (
          projects.map((project) => (
            <article className="project-card" key={project.slug}>
              {project.image ? <img src={project.image} alt={project.title} /> : null}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
