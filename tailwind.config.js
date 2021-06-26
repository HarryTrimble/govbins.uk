/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        pink: {
          400: "#ea47cb",
        },
        gray: {
          400: "#f8f8f8",
        },
      },
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ["./components/*.js", "./pages/*.js"],
};
