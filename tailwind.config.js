/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 1. Colors go here
      colors: {
        bg: 'var(--bg-color)',
        hero: 'var(--hero-bg)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        border: 'var(--border-color)',
        card: 'var(--card-bg)',
      },
      // 2. Fonts go here
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

    },
  },
  plugins: [],
}