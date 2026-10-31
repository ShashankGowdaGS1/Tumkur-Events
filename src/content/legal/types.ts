/**
 * Type Definitions for Legal & Policy Content System
 * Routes: /privacy-policy, /terms-and-conditions, /refund-policy, /cookie-policy
 */

export interface PolicySection {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
  readonly reviewNote?: string;
}

export interface PolicyDocument {
  readonly slug: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly lastUpdated: string;
  readonly statusNote: string;
  readonly sections: readonly PolicySection[];
  readonly seoTitle: string;
  readonly seoDescription: string;
}
