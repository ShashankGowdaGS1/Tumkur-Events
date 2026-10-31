import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { cookiePolicyContent } from '@/content/legal/cookie-policy';
import { PolicyPageLayout } from '@/components/legal/policy-page-layout';

export const metadata: Metadata = {
  title: cookiePolicyContent.seoTitle,
  description: cookiePolicyContent.seoDescription,
  alternates: {
    canonical: `${siteConfig.meta.siteUrl}/cookie-policy`,
  },
  openGraph: {
    title: cookiePolicyContent.seoTitle,
    description: cookiePolicyContent.seoDescription,
    url: `${siteConfig.meta.siteUrl}/cookie-policy`,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: cookiePolicyContent.seoTitle,
    description: cookiePolicyContent.seoDescription,
  },
};

export default function CookiePolicyPage() {
  return <PolicyPageLayout document={cookiePolicyContent} />;
}
