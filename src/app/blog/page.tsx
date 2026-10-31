import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { BlogIndexView } from '@/components/blog/blog-index-view';

export const metadata: Metadata = {
  title: 'Celebration Ideas & Event Decor Blog | Tumkur Events',
  description:
    'Explore event decoration ideas, wedding inspiration, birthday themes, traditional ceremony styling, and planning tips from Tumkur Events in Tumakuru, Karnataka.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/blog`,
  },
  openGraph: {
    title: 'Celebration Ideas & Event Decor Blog | Tumkur Events',
    description:
      'Explore event decoration ideas, wedding inspiration, birthday themes, traditional ceremony styling, and planning tips from Tumkur Events in Tumakuru, Karnataka.',
    url: `${siteConfig.meta.siteUrl}/blog`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/weddings.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tumkur Events celebration ideas, event decoration, and floral styling blog',
      },
    ],
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.meta.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Celebration Journal',
            item: `${siteConfig.meta.siteUrl}/blog`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: 'The Celebration Journal | Tumkur Events',
        description:
          'Inspiration, thoughtful details, and practical ideas for making every occasion feel extraordinary across Tumakuru and South Karnataka.',
        url: `${siteConfig.meta.siteUrl}/blog`,
      },
    ],
  };

  return (
    <main className="flex-1 flex flex-col bg-ivory text-charcoal">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogIndexView />
    </main>
  );
}
