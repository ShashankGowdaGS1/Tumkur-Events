import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { blogCategories } from '@/lib/blog/categories';
import { getPublishedPosts } from '@/lib/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.meta.siteUrl;

  const publishedPostRoutes = getPublishedPosts().map((post) => `/blog/${post.slug}`);

  const routes = [
    '',
    '/about',
    '/events',
    '/events/birthdays',
    '/events/traditional-ceremonies',
    '/events/weddings',
    '/events/baby-showers',
    '/events/corporate',
    '/services',
    '/packages',
    '/gallery',
    '/our-work',
    '/reviews',
    '/blog',
    ...blogCategories.map((cat) => `/blog/category/${cat.slug}`),
    ...publishedPostRoutes,
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1.0
        : route.startsWith('/events') || route === '/packages'
          ? 0.8
          : route.startsWith('/blog/')
            ? 0.7
            : 0.6,
  }));
}
