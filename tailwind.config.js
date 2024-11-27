/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        primary: "#E78812",
        secondary: "#1D6076"
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

