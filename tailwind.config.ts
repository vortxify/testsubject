import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced color system with proper scales
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d1',
          300: '#8da9b6',
          400: '#678c9b',
          500: '#0F1B2D',
          600: '#0c1624',
          700: '#09111b',
          800: '#060c12',
          900: '#030609'
        },
        accent: {
          50: '#fef9e7',
          100: '#fdf0b8',
          200: '#fbe188',
          300: '#f9d159',
          400: '#f7c229',
          500: '#E9C46A',
          600: '#d4a841',
          700: '#bf8c18',
          800: '#a87000',
          900: '#8b6914'
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#2A9D8F',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a'
        },
        soft: '#F6F7FB',
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d'
        }
      },
      boxShadow: {
        card: '0 6px 24px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        xl: '14px'
      }
    },
  },
  plugins: [],
} satisfies Config
