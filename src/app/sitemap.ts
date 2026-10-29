import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.meta.siteUrl;

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
    priority: route === '' ? 1.0 : route.startsWith('/events') || route === '/packages' ? 0.8 : 0.6,
  }));
}

