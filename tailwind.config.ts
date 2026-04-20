import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        sans:    ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          blue:   '#4f63e8',
          purple: '#7c3aed',
          mid:    '#6366f1',
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.03em',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config