/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px"
    },
    colors: {
      main: "#0678E3",
      dark: "#000000",
      lowDark: "#45505B",
      gray: "#bebebe",
      white: "#ffffff",
      lowWhite: "#dfdfdf",
      mildMain: "#728394",
      html: "#e75e0e",
      css: "#1392e6",
      js: "#e9e509",
      fire: "#f8da32",
      react: "#5ae3f5",
      photo: "#044386",
      corel: "#60AA45",
      tail: "#07aec4",
    }
  },
  plugins: [],
}