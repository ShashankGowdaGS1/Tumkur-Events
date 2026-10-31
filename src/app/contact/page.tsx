import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactEnquiryForm } from '@/components/contact/contact-enquiry-form';
import { ContactDirect } from '@/components/contact/contact-direct';
import { ContactProcess } from '@/components/contact/contact-process';
import { ContactFAQ } from '@/components/contact/contact-faq';
import { ContactClosing } from '@/components/contact/contact-closing';

export const metadata: Metadata = {
  title: 'Contact Tumkur Events | Plan Your Celebration',
  description:
    'Contact Tumkur Events in Tumakuru, Karnataka to discuss birthday decorations, weddings, traditional ceremonies, stage styling, and customized event decoration enquiries.',
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Tumkur Events | Plan Your Celebration',
    description:
      'Contact Tumkur Events in Tumakuru, Karnataka to discuss birthday decorations, weddings, traditional ceremonies, stage styling, and customized event decoration enquiries.',
    url: `${siteConfig.meta.siteUrl}/contact`,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.meta.siteUrl}/images/events/art-of-celebration.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact Tumkur Events - Luxury Celebration Decor in Tumakuru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tumkur Events | Plan Your Celebration',
    description:
      'Contact Tumkur Events in Tumakuru, Karnataka to discuss birthday decorations, weddings, traditional ceremonies, and event styling enquiries.',
    images: [`${siteConfig.meta.siteUrl}/images/events/art-of-celebration.jpg`],
  },
};

export default function ContactPage() {
  const baseUrl = siteConfig.meta.siteUrl;

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Tumkur Events',
    description:
      'Direct consultation and enquiry portal for luxury event styling, weddings, birthdays, and traditional ceremonies in Tumakuru, Karnataka.',
    url: `${baseUrl}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.brand.name,
      legalName: siteConfig.brand.legalName,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address.streetAddress,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:30',
        },
      ],
      priceRange: '₹₹',
      image: `${baseUrl}/images/events/art-of-celebration.jpg`,
    },
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact & Event Enquiry',
        item: `${baseUrl}/contact`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="jsonld-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <Script
        id="jsonld-contact-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <main className="w-full bg-[#F7F4EE] text-charcoal min-h-screen">
        {/* Section 01: Editorial Contact Hero */}
        <ContactHero />

        {/* Section 02: Main Event Enquiry Form with Suspense for SearchParams */}
        <Suspense
          fallback={
            <div className="w-full py-24 bg-[#FAF7F0] flex items-center justify-center font-mono text-xs text-charcoal/50">
              Loading celebration enquiry portal...
            </div>
          }
        >
          <ContactEnquiryForm />
        </Suspense>

        {/* Section 03: Direct Contact Channels */}
        <ContactDirect />

        {/* Section 04: Enquiry Process Stages */}
        <ContactProcess />

        {/* Section 05: Contact FAQs */}
        <ContactFAQ />

        {/* Section 06: Closing Editorial Statement */}
        <ContactClosing />
      </main>
    </>
  );
}
