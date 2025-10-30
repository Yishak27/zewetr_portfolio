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
        primary: {
          navy: '#1e3a8a',
        },
        accent: {
          gold: '#d97706',
          maroon: '#7c2d12',
        },
        neutral: {
          cream: '#fefbf3',
        },
        text: {
          dark: '#1f2937',
          light: '#6b7280',
        },
        background: '#ffffff',
        foreground: '#171717',
      },
    },
  },
  plugins: [],
};

export default config;