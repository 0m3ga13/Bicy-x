/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#161627",
        secondary: "#ffffff",
        tertiary: "#4a4e69",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#dfdfdf",
  
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0e060e",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};