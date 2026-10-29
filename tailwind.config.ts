import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* 60% Warm Ivory */
        ivory: {
          DEFAULT: '#F7F4EE',
          light: '#FDFBF7',
          subtle: '#EFE9DD',
        },
        /* 30% Charcoal */
        charcoal: {
          DEFAULT: '#151515',
          light: '#222222',
          muted: '#303030',
        },
        /* 10% Brand Gold */
        gold: {
          DEFAULT: '#C79E22',
          hover: '#D6AC2A',
          deep: '#8A6714',
        },
        /* Supporting Accents */
        silver: {
          DEFAULT: '#B8B8B6',
          light: '#DADAD8',
        },
        champagne: {
          DEFAULT: '#E8DFCF',
          light: '#F3ECE0',
        },
      },
      fontFamily: {
        display: ['var(--font-marcellus)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
        accent: ['var(--font-allura)', 'cursive'],
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '400ms',
        slow: '750ms',
        deliberate: '1200ms',
      },
      maxWidth: {
        luxury: '1440px',
        narrow: '1120px',
        reading: '760px',
      },
    },
  },
  plugins: [],
};

export default config;

