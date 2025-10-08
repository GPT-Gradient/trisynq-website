import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a202c',
          DEFAULT: '#2d3748',
          blue: '#4299e1',
        },
        secondary: {
          purple: '#553c9a',
          'purple-light': '#9f7aea',
        },
        accent: {
          pink: '#ed64a6',
        },
        background: {
          dark: '#1a202c',
          medium: '#2d3748',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
