import { SiteConfig } from '@/types';

/**
 * Centralized Site Configuration for Tumkur Events
 * All brand details, contact information, navigation, and route definitions
 * are maintained here to avoid hardcoded duplication across components.
 */
export const siteConfig: SiteConfig = {
  brand: {
    name: 'Tumkur Events',
    legalName: 'Tumkur Events Management & Luxury Decor',
    tagline: 'Contemporary Celebration Luxury',
    shortTagline: 'Bespoke Celebrations & Scenic Luxury Decor',
    philosophy:
      'Harmonizing timeless South Karnataka cultural reverence with contemporary luxury aesthetics to curate transcendent weddings, traditional ceremonies, and milestones.',
    establishedYear: 2018,
  },
  contact: {
    phone: '+91 94812 34567',
    phoneDisplay: '+91 94812 34567',
    alternatePhone: '+91 98801 23456',
    email: 'concierge@tumkurevents.com',
    inquiryEmail: 'celebrate@tumkurevents.com',
    address: {
      streetAddress: 'B.H. Road, Near Ashoka Nagar',
      area: 'Ashoka Nagar',
      city: 'Tumakuru',
      district: 'Tumakuru',
      state: 'Karnataka',
      postalCode: '572102',
      country: 'India',
    },
    businessHours: {
      weekdays: '09:00 AM – 08:30 PM IST',
      weekends: '09:00 AM – 09:30 PM IST',
    },
  },
  social: {
    instagram: 'https://instagram.com/tumkurevents',
    facebook: 'https://facebook.com/tumkurevents',
    youtube: 'https://youtube.com/@tumkurevents',
    whatsapp: 'https://wa.me/919481234567',
    pinterest: 'https://pinterest.com/tumkurevents',
  },
  routes: {
    home: '/',
    about: '/about',
    events: '/events',
    eventDetail: (slug: string) => `/events/${slug}`,
    services: '/services',
    packages: '/packages',
    gallery: '/gallery',
    ourWork: '/gallery',
    eventStory: (slug: string) => `/our-work/${slug}`,
    reviews: '/reviews',
    blog: '/blog',
    blogCategory: (slug: string) => `/blog/category/${slug}`,
    blogArticle: (slug: string) => `/blog/${slug}`,
    faq: '/faq',
    contact: '/contact',
    privacyPolicy: '/privacy-policy',
    termsAndConditions: '/terms-and-conditions',
    refundPolicy: '/refund-policy',
    cookiePolicy: '/cookie-policy',
    thankYou: '/thank-you',
    notFound: '/404',
  },
  heroVideo: {
    path: '/media/tumkur-hero.mp4',
    posterPath: '/media/tumkur-hero-poster.webp',
    nominalDimensions: {
      width: 1920,
      height: 1080,
      fps: 24,
    },
  },
  navigation: {
    primary: [
      {
        label: 'Events',
        href: '/events',
        children: [
          { label: 'Explore All Events', href: '/events' },
          { label: "Birthdays & Kids' Celebrations", href: '/events/birthdays' },
          { label: 'Traditional Ceremonies', href: '/events/traditional-ceremonies' },
          { label: 'Weddings & Engagements', href: '/events/weddings' },
          { label: 'Baby Showers & Family Functions', href: '/events/baby-showers' },
          { label: 'Corporate & Institutional Events', href: '/events/corporate' },
          { label: 'Our Past Events', href: '/gallery' },
        ],
      },
      { label: 'Services', href: '/services' },
      { label: 'Packages', href: '/packages' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: {
      label: 'Plan an Event',
      href: '/contact',
    },
    secondary: [
      { label: 'Reviews', href: '/reviews' },
      { label: 'Journal', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
  meta: {
    defaultTitle: 'Tumkur Events | Contemporary Celebration Luxury',
    titleTemplate: '%s | Tumkur Events',
    defaultDescription:
      'Premier luxury event design and bespoke celebration management in Tumkur and South Karnataka. Specializing in destination-grade weddings, grand receptions, and cultural festivities.',
    siteUrl: 'https://tumkurevents.com',
    locale: 'en_IN',
  },
};

