/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dj-green': '#009A44',
        'dj-dark': '#00783A',
        'dj-light': '#E8F5EE',
      },
      fontFamily: { sans: ['Open Sans','system-ui','sans-serif'] },
    },
  },
  plugins: [],
}
