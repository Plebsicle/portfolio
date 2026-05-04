/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        inverse: 'rgb(var(--color-inverse) / <alpha-value>)',
        'inverse-content': 'rgb(var(--color-inverse-content) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        drama: ['DM Serif Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
