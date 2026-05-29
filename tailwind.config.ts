import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1f1b17',
        paper: '#f7f3ec',
        stone: '#c7b69d',
        olive: '#53624d',
        clay: '#8c513a'
      },
      fontFamily: {
        sans: ['Source Sans 3', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        arabic: ['Noto Kufi Arabic', 'Noto Sans Arabic', 'Tahoma', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
