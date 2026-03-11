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
        'cimientos': {
          50: '#f0f9fe',
          100: '#dcf1fd',
          200: '#b9e4fb',
          300: '#86d2f8',
          400: '#41c0f0',
          500: '#1da8e0',
          600: '#1088bf',
          700: '#0e6d9b',
          800: '#105b80',
          900: '#134c6a',
        },
        'primary': {
          50: '#fefde8',
          100: '#fefbc3',
          200: '#fef48a',
          300: '#fde747',
          400: '#fcd300',
          500: '#ecbb06',
          600: '#cc9102',
          700: '#a36806',
          800: '#86520d',
          900: '#724311',
        },
        'accent': {
          50: '#fff1f5',
          100: '#ffe0ea',
          200: '#ffc6d9',
          300: '#ff9dbe',
          400: '#ff7bac',
          500: '#f94d85',
          600: '#e72b63',
          700: '#c31d4c',
          800: '#a21b42',
          900: '#8b1a3d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
