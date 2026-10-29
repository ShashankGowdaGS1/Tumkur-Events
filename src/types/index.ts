/**
 * Core Type Definitions for Tumkur Events
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
  readonly children?: readonly NavLink[];
}

export interface SocialLinks {
  readonly instagram?: string;
  readonly facebook?: string;
  readonly youtube?: string;
  readonly pinterest?: string;
  readonly whatsapp?: string;
  readonly linkedin?: string;
}

export interface BusinessAddress {
  readonly streetAddress: string;
  readonly area: string;
  readonly city: string;
  readonly district: string;
  readonly state: string;
  readonly postalCode: string;
  readonly country: string;
}

export interface BusinessContact {
  readonly phone: string;
  readonly phoneDisplay: string;
  readonly alternatePhone?: string;
  readonly email: string;
  readonly inquiryEmail: string;
  readonly address: BusinessAddress;
  readonly businessHours: {
    readonly weekdays: string;
    readonly weekends: string;
  };
}

export interface BrandDetails {
  readonly name: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly shortTagline: string;
  readonly philosophy: string;
  readonly establishedYear: number;
}

export interface HeroVideoConfig {
  readonly path: string;
  readonly posterPath: string;
  readonly nominalDimensions: {
    readonly width: number;
    readonly height: number;
    readonly fps: number;
  };
}

export interface PlannedRoutes {
  readonly home: string;
  readonly about: string;
  readonly events: string;
  readonly eventDetail: (slug: string) => string;
  readonly services: string;
  readonly packages: string;
  readonly gallery: string;
  readonly ourWork: string;
  readonly eventStory: (slug: string) => string;
  readonly reviews: string;
  readonly blog: string;
  readonly blogCategory: (slug: string) => string;
  readonly blogArticle: (slug: string) => string;
  readonly faq: string;
  readonly contact: string;
  readonly privacyPolicy: string;
  readonly termsAndConditions: string;
  readonly refundPolicy: string;
  readonly cookiePolicy: string;
  readonly thankYou: string;
  readonly notFound: string;
}

export interface SiteConfig {
  readonly brand: BrandDetails;
  readonly contact: BusinessContact;
  readonly social: SocialLinks;
  readonly routes: PlannedRoutes;
  readonly heroVideo: HeroVideoConfig;
  readonly navigation: {
    readonly primary: readonly NavLink[];
    readonly cta: {
      readonly label: string;
      readonly href: string;
    };
    readonly secondary: readonly NavLink[];
    readonly legal: readonly NavLink[];
  };
  readonly meta: {
    readonly defaultTitle: string;
    readonly titleTemplate: string;
    readonly defaultDescription: string;
    readonly siteUrl: string;
    readonly locale: string;
  };
}

