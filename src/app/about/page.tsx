import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { AboutHero } from '@/components/about/about-hero';
import { AboutOurStory } from '@/components/about/about-our-story';
import { AboutCelebrationManifesto } from '@/components/about/about-celebration-manifesto';
import { AboutCreativePhilosophy } from '@/components/about/about-creative-philosophy';
import { AboutBehindEveryDetail } from '@/components/about/about-behind-every-detail';
import { AboutRootedInTumakuru } from '@/components/about/about-rooted-in-tumakuru';
import { AboutOurApproach } from '@/components/about/about-our-approach';
import { AboutExploreOurWorld } from '@/components/about/about-explore-our-world';
import { AboutFinalCta } from '@/components/about/about-final-cta';

export const metadata: Metadata = {
  title: 'About Tumkur Events | Event Decoration in Tumakuru',
  description:
    'Learn about Tumkur Events, our approach to meaningful celebrations, and our creative event decoration services in Tumakuru, Karnataka.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/about`,
  },
  openGraph: {
    title: 'About Tumkur Events | Event Decoration in Tumakuru',
    description:
      'Learn about Tumkur Events, our approach to meaningful celebrations, and our creative event decoration services in Tumakuru, Karnataka.',
    url: `${siteConfig.meta.siteUrl}/about`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/weddings.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tumkur Events bespoke celebration decoration and event design atelier',
      },
    ],
  },
};

export default function AboutPage() {
  // Structured Data (JSON-LD) for BreadcrumbList and AboutPage
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
            name: 'About Us',
            item: `${siteConfig.meta.siteUrl}/about`,
          },
        ],
      },
      {
        '@type': 'AboutPage',
        name: 'About Tumkur Events | Event Decoration in Tumakuru',
        description:
          'Learn about Tumkur Events, our approach to meaningful celebrations, and our creative event decoration services in Tumakuru, Karnataka.',
        url: `${siteConfig.meta.siteUrl}/about`,
        publisher: {
          '@type': 'LocalBusiness',
          name: siteConfig.brand.name,
          url: siteConfig.meta.siteUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.contact.address.streetAddress,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.state,
            postalCode: siteConfig.contact.address.postalCode,
            addressCountry: siteConfig.contact.address.country,
          },
        },
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

      {/* SECTION 01: CINEMATIC EDITORIAL HERO */}
      <AboutHero />

      {/* SECTION 02: OUR STORY */}
      <AboutOurStory />

      {/* SECTION 03: WHAT CELEBRATIONS MEAN TO US (MANIFESTO) */}
      <AboutCelebrationManifesto />

      {/* SECTION 04: OUR CREATIVE PHILOSOPHY (4-CHAPTER SELECTOR) */}
      <AboutCreativePhilosophy />

      {/* SECTION 05: BEHIND EVERY DETAIL */}
      <AboutBehindEveryDetail />

      {/* SECTION 06: ROOTED IN TUMAKURU */}
      <AboutRootedInTumakuru />

      {/* SECTION 07: OUR APPROACH */}
      <AboutOurApproach />

      {/* SECTION 08: EXPLORE OUR WORLD */}
      <AboutExploreOurWorld />

      {/* SECTION 09: FINAL ENQUIRY CTA */}
      <AboutFinalCta />
    </main>
  );
}
