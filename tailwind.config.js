/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "#05162a",
        "dark-theme-2": "#1e2745bb",
      },
      height: {
        "screen-1/2": "50vh",
      },
    },
  },
  plugins: [],
};
