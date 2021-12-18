const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#6C80EA',
      secondary: '#A7A5EC',
      tertiary: '#DCDAF6',
      paper: 'rgba(255, 255, 255, 0.25)',
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'Roboto', 'sans-serif'],
      }
    }
  },
  variants: {},
  plugins: [
  ]
};
