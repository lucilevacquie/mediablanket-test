/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5271ff",
        primaryDark: "#314CC7",
        secondary: "#0E1C36"
      }
    },
  },
  plugins: [],
}
