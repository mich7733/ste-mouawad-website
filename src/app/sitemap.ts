import type {MetadataRoute} from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ste-mouawad.com';

const paths = ['', '/about', '/portfolio', '/projects', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return paths.flatMap((path) => [
    {
      url: `${siteUrl}${path || '/'}`,
      lastModified: now,
      alternates: {
        languages: {
          en: `${siteUrl}${path || '/'}`,
          ar: `${siteUrl}/ar${path}`
        }
      }
    },
    {
      url: `${siteUrl}/ar${path}`,
      lastModified: now,
      alternates: {
        languages: {
          en: `${siteUrl}${path || '/'}`,
          ar: `${siteUrl}/ar${path}`
        }
      }
    }
  ]);
}
