import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matte: '#08090B',
        charcoal: '#121419',
        surface: '#181B22',
        champagne: {
          DEFAULT: '#C6AE82',
          light: '#E2D1B3',
          dark: '#8E7753',
          muted: 'rgba(198, 174, 130, 0.15)',
        },
        silver: {
          DEFAULT: '#A7ABB4',
          light: '#F5F5F2',
          dark: '#686C75',
        },
        techblue: {
          DEFAULT: '#70A5D6',
          glow: 'rgba(112, 165, 214, 0.15)',
        },
      },
      boxShadow: {
        glow: '0 0 80px rgba(198, 174, 130, 0.08)',
        'champagne-glow': '0 0 40px rgba(198, 174, 130, 0.12)',
        'blue-glow': '0 0 40px rgba(112, 165, 214, 0.15)',
        card: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-code)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
