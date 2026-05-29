import projects from '../../admin-content/projects.json';
import type {Locale} from '@/i18n/routing';

type ProjectEntry = {
  slug: string;
  image?: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export function getProjects(locale: Locale) {
  return (projects as ProjectEntry[]).map((project) => ({
    slug: project.slug,
    image: project.image,
    title: project.title[locale],
    description: project.description[locale]
  }));
}
