/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: { 900: '#171717', 800: '#242424', 700: '#333333' },
        cream: '#F7F5F0',
        champagne: { DEFAULT: '#C7A77B', hover: '#b59365', light: '#F4ECE1' },
        muted: '#858585',
      }
    },
  },
  plugins: [],
}
