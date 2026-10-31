import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { galleryItems } from '@/config/gallery';
import { GalleryClientView } from '@/components/gallery/gallery-client-view';

export const metadata: Metadata = {
  title: 'Event Decoration Gallery | Tumkur Events',
  description:
    'Explore celebration decoration inspiration including birthdays, traditional ceremonies, weddings, engagements, baby showers, and event styling by Tumkur Events in Tumakuru.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/gallery`,
  },
  openGraph: {
    title: 'Event Decoration Gallery | Tumkur Events',
    description:
      'Explore celebration decoration inspiration including birthdays, traditional ceremonies, weddings, engagements, baby showers, and event styling by Tumkur Events in Tumakuru.',
    url: `${siteConfig.meta.siteUrl}/gallery`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/weddings.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tumkur Events bespoke celebration decoration and photography gallery',
      },
    ],
  },
};

export default function GalleryPage() {
  // Structured Data (JSON-LD) for ImageGallery & BreadcrumbList
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
            name: 'Gallery',
            item: `${siteConfig.meta.siteUrl}/gallery`,
          },
        ],
      },
      {
        '@type': 'ImageGallery',
        name: 'Tumkur Events Celebration Decoration Gallery',
        description:
          'A curated visual exhibition of stage craft, floral styling, traditional ceremonial mandaps, and festive milestones in Tumakuru.',
        url: `${siteConfig.meta.siteUrl}/gallery`,
        image: galleryItems.map((item) => ({
          '@type': 'ImageObject',
          name: item.title,
          caption: item.caption,
          contentUrl: `${siteConfig.meta.siteUrl}${item.image}`,
        })),
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

      {/* Main Gallery View with Hero, Categories, Grid, Lightbox, Interlude, & CTA */}
      <GalleryClientView />
    </main>
  );
}
