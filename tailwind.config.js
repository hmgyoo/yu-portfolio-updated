/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        accent: '#E8FF00',      // electric yellow pop
        accent2: '#FF3C00',     // burnt orange pop
        ink: '#0A0A0A',
        paper: '#F5F2ED',
        'paper-dark': '#111111',
        muted: '#888888',
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
