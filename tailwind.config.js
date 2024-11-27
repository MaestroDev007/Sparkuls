/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small devices (phones)
        sm: "576px", // Small devices (tablets)
        md: "768px", // Medium devices (laptops)
        lg: "998px", // Large devices (desktops)
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // Larger screens
      },
      colors: {
        primary: "#E78812",
        secondary: "#1D6076",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
