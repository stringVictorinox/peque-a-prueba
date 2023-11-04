/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popper': ['Poppins', 'sans-serif'],
        'baloo': ['Baloo Bhai 2', 'sans-serif']
      }
    },
  },
  plugins: [],
}