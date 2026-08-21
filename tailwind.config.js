/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festival: {
          dark: '#0a0a0a',
          card: 'rgba(26, 29, 36, 0.7)',
          primary: '#e91e63', // Magenta
          secondary: '#3f51b5',
          accent: '#00e5ff'
        }
      }
    },
  },
  plugins: [],
}
