/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purpledark: "rgba(23,6,42,255)",
        darkblue: "rgba(30,8,54,255)"
      },
    },
  },
  plugins: [],
}

