import type { Metadata, Viewport } from 'next';
import { fontMarcellus, fontManrope, fontAllura } from '@/lib/fonts';
import { siteConfig } from '@/config/site';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FloatingContactActions } from '@/components/floating/floating-contact-actions';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.siteUrl),
  title: {
    default: siteConfig.meta.defaultTitle,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.defaultDescription,
  applicationName: siteConfig.brand.name,
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.defaultDescription,
    url: siteConfig.meta.siteUrl,
    siteName: siteConfig.brand.name,
    locale: siteConfig.meta.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#151515',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontMarcellus.variable} ${fontManrope.variable} ${fontAllura.variable}`}
    >
      <body className="min-h-screen bg-ivory text-charcoal antialiased selection:bg-champagne selection:text-charcoal flex flex-col font-sans">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
        <FloatingContactActions />
      </body>
    </html>
  );
}

