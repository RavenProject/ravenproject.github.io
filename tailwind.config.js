/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_data/**/*.{html,js,json,md}",
    "./_includes/**/*.{html,js,json,md}",
    "./_layouts/**/*.{html,js,json,md}",
    "./_pages/**/*.{html,js,json,md}",
    "*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
