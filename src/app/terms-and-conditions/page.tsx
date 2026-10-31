import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { termsAndConditionsContent } from '@/content/legal/terms-and-conditions';
import { PolicyPageLayout } from '@/components/legal/policy-page-layout';

export const metadata: Metadata = {
  title: termsAndConditionsContent.seoTitle,
  description: termsAndConditionsContent.seoDescription,
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/terms-and-conditions`,
  },
  openGraph: {
    title: termsAndConditionsContent.seoTitle,
    description: termsAndConditionsContent.seoDescription,
    url: `${siteConfig.meta.siteUrl}/terms-and-conditions`,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: termsAndConditionsContent.seoTitle,
    description: termsAndConditionsContent.seoDescription,
  },
};

export default function TermsAndConditionsPage() {
  return <PolicyPageLayout document={termsAndConditionsContent} />;
}
