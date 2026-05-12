import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticPaths: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/showcase', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/customise', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/solutions/events', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/solutions/real-estate', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/solutions/hospitality', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/process', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/platform', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/platform/pricing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/samples', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/demo', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/signup', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/blog', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/legal/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal/refunds', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  }));

  const posts = getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date((p.updatedAt ?? p.publishedAt) + 'T00:00:00'),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
