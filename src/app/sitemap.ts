import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/seo';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/OurWork', '/Contact', '/WhyUs', '/Blog'];
  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}` })),
    ...posts.map((post) => ({ url: `${SITE_URL}${post.href}`, lastModified: post.date })),
  ];
}
