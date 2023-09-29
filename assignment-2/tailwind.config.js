/** @type {import('tailwindcss').Config} */
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
      },
      colors: {
        pink: {
          500: '#E4526E',
          600: '#E13F5E',
          700: '#CA3854',
        },
        dark: { 
          300: '#393939',
          700: '#1F1F1F',
          800: '#1B1B1B',
          900: '#272727'
        }, 
        'black-rgba': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}