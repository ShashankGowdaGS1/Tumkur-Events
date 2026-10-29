/**
 * Centralized Configuration for Section 11: Final Cinematic Enquiry CTA
 * Design Name: "The Final Invitation"
 */

export interface FinalCtaConfig {
  readonly eyebrow: string;
  readonly headingLine1: string;
  readonly headingLine2: string;
  readonly accentLine: string;
  readonly description: string;
  readonly primaryCta: {
    readonly label: string;
    readonly href: string;
  };
  readonly secondaryCta: {
    readonly label: string;
    readonly href: string;
  };
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export const finalCtaConfig: FinalCtaConfig = {
  eyebrow: 'YOUR CELEBRATION BEGINS HERE',
  headingLine1: 'Every Celebration',
  headingLine2: 'Has a Story.',
  accentLine: "Now, Let's Create Yours.",
  description:
    "Tell us about your occasion, your ideas, and the moments you're planning. Let's explore something beautiful together.",
  primaryCta: {
    label: 'PLAN YOUR EVENT',
    href: '/contact?source=home-final-cta',
  },
  secondaryCta: {
    label: 'EXPLORE OUR WORK',
    href: '/our-work',
  },
  image: {
    src: '/images/events/final-cta-canopy.jpg',
    alt: 'Luxury Indian evening event decoration with floral canopy, cascading jasmine garlands, fairy lights, and glowing brass lanterns',
    width: 2560,
    height: 1440,
  },
};
