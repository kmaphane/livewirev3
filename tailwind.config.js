/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const themeChange = require("theme-change")
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
  },
  plugins: [require("daisyui"), themeChange],
}

