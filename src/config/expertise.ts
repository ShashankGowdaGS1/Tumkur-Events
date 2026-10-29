/**
 * Centralized Configuration for Our Expertise
 * Homepage Section 06: "The Details Behind Every Celebration"
 *
 * Grounded in Tumkur Events' decoration and creative styling capabilities.
 * Six core service categories:
 * 01 - Event Concept & Theme Styling
 * 02 - Floral & Traditional Décor
 * 03 - Balloon & Themed Installations
 * 04 - Stage & Backdrop Design
 * 05 - Venue & Entrance Styling
 * 06 - Decorative Lighting & Details
 */

export interface ExpertiseService {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
}

export const expertiseServices: readonly ExpertiseService[] = [
  {
    id: 'service-01',
    number: '01',
    category: 'EXPERTISE',
    title: 'Event Concept & Theme Styling',
    description:
      'Personalized themes and creative styling that reflect the character of every occasion.',
  },
  {
    id: 'service-02',
    number: '02',
    category: 'EXPERTISE',
    title: 'Floral & Traditional Décor',
    description:
      'Thoughtful floral arrangements and ceremonial decorations inspired by meaningful traditions.',
  },
  {
    id: 'service-03',
    number: '03',
    category: 'EXPERTISE',
    title: 'Balloon & Themed Installations',
    description:
      'Playful balloons, custom backdrops, and colorful installations for memorable celebrations.',
  },
  {
    id: 'service-04',
    number: '04',
    category: 'EXPERTISE',
    title: 'Stage & Backdrop Design',
    description:
      'Beautifully composed decorative stages and statement backdrops that become the heart of the event.',
  },
  {
    id: 'service-05',
    number: '05',
    category: 'EXPERTISE',
    title: 'Venue & Entrance Styling',
    description:
      'Welcoming entrances and carefully arranged celebration spaces that set the mood from the first moment.',
  },
  {
    id: 'service-06',
    number: '06',
    category: 'EXPERTISE',
    title: 'Decorative Lighting & Details',
    description:
      'Warm decorative lighting, thoughtful accents, and finishing touches that bring the entire setting together.',
  },
];

