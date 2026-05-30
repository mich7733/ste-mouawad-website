import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mouawad: {
          red: '#C73636',
          charcoal: '#171411',
          stone: '#E8E0D4',
          paper: '#F8F5EF'
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 20, 17, 0.11)'
      }
    }
  },
  plugins: []
};

export default config;
