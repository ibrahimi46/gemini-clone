/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        gray1: "#80868b",
        grayhover: "#e3e3e3",
        backgroundBlack: "#131313",
        graySidebar: "#282a2c",
        hover: "#3d3c3c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
