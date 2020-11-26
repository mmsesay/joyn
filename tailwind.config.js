const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        baseTeal: "#3A9689",
        baseGray: "#D9DBD4",
        baseGrayLight: "#EDEDED"
      },
      height: {
        baseCardHeight: '70px'
      },
      margin: {}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
