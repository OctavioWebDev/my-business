import type { Metadata } from 'next';
import { getPost } from './posts';

export const SITE_URL = 'https://www.questwebtech.com';
const SITE_NAME = 'Quest Web Development Technologies';
const DEFAULT_IMAGE = '/opengraph-image.png';

interface PageSeo {
  title: string;
  description: string;
  path: string;
}

/** Title, description, canonical URL and link preview for one page. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: SITE_NAME, url: path, title, description, images: [DEFAULT_IMAGE] },
  };
}

/** The same for an article in src/data/posts.ts, using its cover image and date. */
export function postMetadata(href: string, description?: string): Metadata {
  const post = getPost(href);
  const desc = description ?? post.excerpt;
  return {
    title: post.title,
    description: desc,
    alternates: { canonical: href },
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      url: href,
      title: post.title,
      description: desc,
      publishedTime: post.date,
      images: [encodeURI(post.image)],
    },
  };
}

/** Business details for search engines (schema.org), shown on the home page. */
export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  alternateName: 'Quest Web Tech',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logos/questwebtech9.png`,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  telephone: '+1-419-343-9894',
  email: 'contact@questwebtech.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Toledo', addressRegion: 'OH', addressCountry: 'US' },
  areaServed: 'Toledo, Ohio',
  openingHours: 'Mo-Fr 09:00-17:00',
  description:
    'Custom website design and development, APIs, databases, maintenance and marketing for businesses in Toledo, Ohio.',
};
