/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// Compare this snippet from src/pages/Home.jsx:
// import { Link } from "react-router-dom";