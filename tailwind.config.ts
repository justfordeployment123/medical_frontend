import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#020617',
        'bg-secondary': '#0b1120',
        'accent': '#7dd3fc',
        'accent-glow': 'rgba(125,211,252,0.15)',
        'accent-border': 'rgba(125,211,252,0.3)',
        'text-primary': '#ffffff',
        'text-muted': '#94a3b8',
        'glass-bg': 'rgba(255,255,255,0.04)',
        'glass-border': 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        card: '1.5rem',
      },
      spacing: {
        'nav': '72px',
      },
    },
  },
  plugins: [],
};

export default config;
