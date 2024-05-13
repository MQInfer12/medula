/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#fff3da",
        },
        first: {
          DEFAULT: "#7768ae",
          light: "#bfb8d9",
        },
        second: {
          DEFAULT: "#e15554",
          light: "#f1afaf",
        },
        third: {
          DEFAULT: "#e1bc29",
          light: "#f1e09d",
        },
        fourth: {
          DEFAULT: "#3bb273",
          light: "#a3dbbd",
        },
        fifth: {
          DEFAULT: "#009ee3",
        },
      },
    },
  },
  plugins: [],
};
