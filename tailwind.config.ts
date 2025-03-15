import type { Config } from 'tailwindcss'

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
          DEFAULT: '#0F52BA', // Deep blue
          dark: '#082c65',
          light: '#3472e0',
        },
        secondary: {
          DEFAULT: '#6D00B9', // Purple for innovation
          dark: '#4a0080',
          light: '#8f33db',
        },
        dark: {
          DEFAULT: '#0a0a0e',
          100: '#121218',
          200: '#18181f',
          300: '#1e1e26',
        },
        accent: {
          DEFAULT: '#00AEEF', // Bright blue for accents
          dark: '#0092c8',
          light: '#33c6ff',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'spotlight': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 174, 239, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(0, 174, 239, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config