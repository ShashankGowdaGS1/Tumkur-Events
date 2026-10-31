import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { servicesData } from '@/config/services-page';
import { ServicesHero } from '@/components/services/services-hero';
import { ServiceIndex } from '@/components/services/service-index';
import { ServicesArtOfStyling } from '@/components/services/services-art-of-styling';
import { ServicesBeautyOfCelebration } from '@/components/services/services-beauty-of-celebration';
import { ServicesTransformingSpaces } from '@/components/services/services-transforming-spaces';
import { ServicesCustomization } from '@/components/services/services-customization';
import { ServicesInspirationGallery } from '@/components/services/services-inspiration-gallery';
import { ServicesFaq } from '@/components/services/services-faq';
import { ServicesFinalCta } from '@/components/services/services-final-cta';

export const metadata: Metadata = {
  title: 'Services & Event Production | Tumkur Events',
  description:
    'Explore bespoke event decoration and creative styling services by Tumkur Events in Tumakuru. Theme styling, floral decor, balloon installations, stage design, venue styling, and ambient lighting.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/services`,
  },
  openGraph: {
    title: 'Services & Event Production | Tumkur Events',
    description:
      'Explore bespoke event decoration and creative styling services by Tumkur Events in Tumakuru. Theme styling, floral decor, balloon installations, stage design, venue styling, and ambient lighting.',
    url: `${siteConfig.meta.siteUrl}/services`,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/weddings.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tumkur Events bespoke event decoration and production services',
      },
    ],
  },
};

export default function ServicesPage() {
  // Structured Data (JSON-LD) for CollectionPage and Service ItemList
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
            name: 'Services',
            item: `${siteConfig.meta.siteUrl}/services`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Event Decoration and Production Services',
        description:
          'Creative event design disciplines offered by Tumkur Events in Tumakuru, Karnataka.',
        itemListElement: servicesData.map((svc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: svc.title,
          description: svc.description,
          url: `${siteConfig.meta.siteUrl}/services#${svc.anchorId}`,
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

      {/* SECTION 01: SERVICES HERO */}
      <ServicesHero />

      {/* SECTION 02: INTERACTIVE SERVICE INDEX */}
      <ServiceIndex />

      {/* SECTION 03: THE ART OF STYLING (Services 01 & 02) */}
      <ServicesArtOfStyling />

      {/* SECTION 04: THE BEAUTY OF CELEBRATION (Services 03 & 04) */}
      <ServicesBeautyOfCelebration />

      {/* SECTION 05: TRANSFORMING SPACES (Services 05 & 06) */}
      <ServicesTransformingSpaces />

      {/* SECTION 06: CRAFTED AROUND YOUR VISION (Customization Storytelling) */}
      <ServicesCustomization />

      {/* SECTION 07: INSPIRATION GALLERY */}
      <ServicesInspirationGallery />

      {/* SECTION 08: SERVICES FAQ (6 Confirmed Questions) */}
      <ServicesFaq />

      {/* SECTION 09: FINAL PREMIUM CTA */}
      <ServicesFinalCta />
    </main>
  );
}
