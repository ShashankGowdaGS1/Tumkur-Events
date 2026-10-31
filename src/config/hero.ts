export interface HeroChapter {
  readonly id: 1 | 2 | 3 | 4;
  readonly key: string;
  readonly title: string;
  readonly statement: string;
  readonly supportingText: string;
  readonly isSemanticH1: boolean;
  readonly startSeconds: number;
  readonly endSeconds: number;
  readonly alignment: 'left' | 'right';
  readonly primaryCta?: {
    readonly label: string;
    readonly href: string;
  };
  readonly secondaryCta?: {
    readonly label: string;
    readonly href: string;
  };
}

export interface HeroConfig {
  readonly media: {
    readonly videoSrc: string;
    readonly posterSrc: string;
    readonly nominalDuration: number;
    readonly fps: number;
    readonly width: number;
    readonly height: number;
  };
  readonly scroll: {
    readonly scrollMultiplier: number;
    readonly scrubSmoothing: number;
  };
  readonly chapters: readonly HeroChapter[];
}

/**
 * Cinematic Scrollytelling Hero Configuration
 *
 * Alternating Chapter Layouts:
 * - Chapter 01: LEFT  (The Invitation — Magical Doorway)
 * - Chapter 02: RIGHT (The Celebration — Outdoor Pastel Birthday)
 * - Chapter 03: LEFT  (The Craft — Illuminated Lotus Stage)
 * - Chapter 04: RIGHT (The Finale — Grand Floral Wedding Venue)
 */
export const heroConfig: HeroConfig = {
  media: {
    videoSrc: '/media/tumkur-hero.mp4',
    posterSrc: '/media/tumkur-hero-poster.webp',
    nominalDuration: 17.877333,
    fps: 24,
    width: 1920,
    height: 1080,
  },
  scroll: {
    // 3 viewport heights of scroll travel for natural cinematic pacing
    scrollMultiplier: 3,
    scrubSmoothing: 0.5,
  },
  chapters: [
    {
      id: 1,
      key: 'invitation',
      title: 'The Invitation',
      statement: 'Every Celebration Has a Story.',
      supportingText: 'Extraordinary moments begin with imagination.',
      isSemanticH1: true,
      startSeconds: 0.0,
      endSeconds: 3.0,
      alignment: 'left',
      primaryCta: {
        label: 'Plan Your Event',
        href: '/contact',
      },
      secondaryCta: {
        label: 'Explore Our Work',
        href: '/gallery',
      },
    },
    {
      id: 2,
      key: 'celebration',
      title: 'The Celebration',
      statement: 'Beautifully Imagined.',
      supportingText: 'Personalized experiences for moments that matter.',
      isSemanticH1: false,
      startSeconds: 3.2,
      endSeconds: 9.0,
      alignment: 'right',
    },
    {
      id: 3,
      key: 'craft',
      title: 'The Craft',
      statement: 'Crafted with Care.',
      supportingText: 'Every detail, thoughtfully considered.',
      isSemanticH1: false,
      startSeconds: 9.2,
      endSeconds: 14.8,
      alignment: 'left',
    },
    {
      id: 4,
      key: 'finale',
      title: 'The Finale',
      statement: 'Made Unforgettable.',
      supportingText: "Let's bring your celebration to life.",
      isSemanticH1: false,
      startSeconds: 15.0,
      endSeconds: 17.877333,
      alignment: 'right',
      primaryCta: {
        label: 'Plan Your Event',
        href: '/contact',
      },
    },
  ],
};
