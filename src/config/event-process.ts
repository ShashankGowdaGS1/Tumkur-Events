/**
 * Centralized Configuration for Event Process Timeline
 * Homepage Section 07: "From Vision to Celebration" (The Journey of a Celebration)
 *
 * Four distinct process milestones alternating above and below a continuous central rail:
 * 01 - Share Your Vision (Above)
 * 02 - Shape the Concept (Below)
 * 03 - Perfect the Details (Above)
 * 04 - Bring It to Life (Below)
 */

export interface ProcessStep {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly position: 'above' | 'below';
  readonly tag: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    id: 'step-01',
    number: '01',
    title: 'Share Your Vision',
    description:
      'Tell us about your occasion, venue, preferred style, and the atmosphere you have in mind.',
    position: 'above',
    tag: 'CONSULTATION & INTAKE',
  },
  {
    id: 'step-02',
    number: '02',
    title: 'Shape the Concept',
    description:
      'Explore decoration ideas, color palettes, themes, and styling possibilities for your celebration.',
    position: 'below',
    tag: 'CREATIVE DIRECTION',
  },
  {
    id: 'step-03',
    number: '03',
    title: 'Perfect the Details',
    description:
      'Bring the agreed design details, decoration requirements, and practical arrangements together.',
    position: 'above',
    tag: 'DESIGN REFINEMENT',
  },
  {
    id: 'step-04',
    number: '04',
    title: 'Bring It to Life',
    description:
      'Prepare the celebration space with the selected décor, thoughtful arrangements, and finishing touches.',
    position: 'below',
    tag: 'ON-SITE STYLING',
  },
];

export const processIntro = {
  eyebrow: 'HOW WE WORK',
  headline: 'From Vision to Celebration.',
  description:
    'A thoughtful journey from your first idea to the finishing touches.',
  accent: 'The journey of a celebration.',
} as const;

export const processClosing = {
  headline: 'Your occasion. Your style. Thoughtfully brought together.',
  description:
    'Ready to design an unforgettable celebration in Tumakuru? Let us begin shaping your concept.',
  ctaText: 'Start Planning Your Event',
  ctaHref: '/contact',
} as const;
