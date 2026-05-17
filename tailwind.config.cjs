const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.resolve(__dirname, 'index.html'),
    path.resolve(__dirname, 'src/**/*.{ts,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#050505',
          50: '#121215',
          100: '#0e0e11',
          800: '#27272a',
        },
        stoira: {
          amber: '#EAB308',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.02)',
          border: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
      },
      fontFamily: {
        sans: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
      },
      borderWidth: {
        DEFAULT: '1px',
        '2': '2px',
      },
    },
  },
  plugins: [],
}
