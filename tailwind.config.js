/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('/images/bg-1.jpeg')"
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
}