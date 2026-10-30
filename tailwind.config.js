/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        police: {
          bg: '#0c0e12',
          sidebar: '#12151c',
          card: '#181b23',
          cardHover: '#1f242f',
          border: '#262b36',
          borderLight: '#323846',
          textMuted: '#8b949e',
          gold: '#e5a93c',
          goldHover: '#d4982b',
          cyan: '#06b6d4',
          cyanBg: 'rgba(6, 182, 212, 0.15)',
          red: '#ef4444',
          badgeGold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
