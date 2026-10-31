import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { ReviewsHero } from '@/components/reviews/reviews-hero';
import { ReviewsEmptyState } from '@/components/reviews/reviews-empty-state';
import { ReviewsMomentsBehindWords } from '@/components/reviews/reviews-moments-behind-words';
import { ReviewsOurApproach } from '@/components/reviews/reviews-our-approach';
import { ReviewsShareExperience } from '@/components/reviews/reviews-share-experience';
import { ReviewsFinalCta } from '@/components/reviews/reviews-final-cta';

export const metadata: Metadata = {
  title: 'Customer Reviews & Experiences | Tumkur Events',
  description:
    'Explore customer experiences and learn about the celebration planning approach of Tumkur Events in Tumakuru, Karnataka.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/reviews`,
  },
  openGraph: {
    title: 'Customer Reviews & Experiences | Tumkur Events',
    description:
      'Explore customer experiences and learn about the celebration planning approach of Tumkur Events in Tumakuru, Karnataka.',
    url: `${siteConfig.meta.siteUrl}/reviews`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/special-occasions.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tumkur Events bespoke celebration moments and client experiences',
      },
    ],
  },
};

export default function ReviewsPage() {
  // Structured Data (JSON-LD) for BreadcrumbList and WebPage (Strictly avoiding self-serving fake review schema)
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
            name: 'Reviews',
            item: `${siteConfig.meta.siteUrl}/reviews`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'Customer Reviews & Experiences | Tumkur Events',
        description:
          'Explore customer experiences and learn about the celebration planning approach of Tumkur Events in Tumakuru, Karnataka.',
        url: `${siteConfig.meta.siteUrl}/reviews`,
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

      {/* SECTION 01: EDITORIAL HERO */}
      <ReviewsHero />

      {/* SECTION 02 & 03: HONEST EMPTY STATE (Review-dependent sections render conditionally when authenticated feedback exists) */}
      <ReviewsEmptyState />

      {/* SECTION 04: MOMENTS BEHIND THE WORDS (DECORATIVE INSPIRATION) */}
      <ReviewsMomentsBehindWords />

      {/* SECTION 05: OUR APPROACH TO EVERY CELEBRATION */}
      <ReviewsOurApproach />

      {/* SECTION 06: SHARE YOUR EXPERIENCE */}
      <ReviewsShareExperience />

      {/* SECTION 07: FINAL CELEBRATION ENQUIRY */}
      <ReviewsFinalCta />
    </main>
  );
}
