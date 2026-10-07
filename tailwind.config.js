/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#41c0f0',
          yellow: '#fcd300',
          pink: '#ff7bac',
          brown: '#603813',
          // Secondary colors: the brandbook asks to use them sparingly.
          navy: '#14387f',
          orange: '#ff9e5c',
          magenta: '#f2308d',
          gray: '#7c7c7b',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fresh-mango)', 'var(--font-montserrat)', 'ui-serif', 'serif'],
      },
    },
  },
  plugins: [],
}
