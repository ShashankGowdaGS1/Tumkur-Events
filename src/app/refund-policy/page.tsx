import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { refundPolicyContent } from '@/content/legal/refund-policy';
import { PolicyPageLayout } from '@/components/legal/policy-page-layout';

export const metadata: Metadata = {
  title: refundPolicyContent.seoTitle,
  description: refundPolicyContent.seoDescription,
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/refund-policy`,
  },
  openGraph: {
    title: refundPolicyContent.seoTitle,
    description: refundPolicyContent.seoDescription,
    url: `${siteConfig.meta.siteUrl}/refund-policy`,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: refundPolicyContent.seoTitle,
    description: refundPolicyContent.seoDescription,
  },
};

export default function RefundPolicyPage() {
  return <PolicyPageLayout document={refundPolicyContent} />;
}
