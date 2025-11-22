/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        special: ['"Special Elite"', 'cursive'],
      },
      colors: {
        palestine: {
          red: '#E4312b',
          black: '#000000',
          white: '#FFFFFF',
          green: '#0f8a47',
          darkGreen: '#0a6332'
        },
        paper: '#fdfbf7',
      }
    },
  },
  plugins: [],
}