/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
       
        primary: "#ea580c", 
        secondary: "#f97316", 
      },
      fontFamily: {
       
        signature: ["Great Vibes", "cursive"], 
      },
    },
  },
  plugins: [],
}