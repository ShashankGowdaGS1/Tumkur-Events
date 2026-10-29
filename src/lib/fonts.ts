import { Marcellus, Manrope, Allura } from 'next/font/google';

/**
 * Display Typography: Marcellus
 * Used for majestic headlines, section titles, and primary editorial titles.
 */
export const fontMarcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
});

/**
 * Body Typography: Manrope
 * Used for body copy, subheadings, navigation, forms, and interactive controls.
 */
export const fontManrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

/**
 * Decorative Accent Typography: Allura
 * Used sparingly for selective decorative accents, evocative callouts,
 * and short emotional phrases.
 */
export const fontAllura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-allura',
});
