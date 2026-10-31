import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { privacyPolicyContent } from '@/content/legal/privacy-policy';
import { PolicyPageLayout } from '@/components/legal/policy-page-layout';

export const metadata: Metadata = {
  title: privacyPolicyContent.seoTitle,
  description: privacyPolicyContent.seoDescription,
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: privacyPolicyContent.seoTitle,
    description: privacyPolicyContent.seoDescription,
    url: `${siteConfig.meta.siteUrl}/privacy-policy`,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: privacyPolicyContent.seoTitle,
    description: privacyPolicyContent.seoDescription,
  },
};

export default function PrivacyPolicyPage() {
  return <PolicyPageLayout document={privacyPolicyContent} />;
}
