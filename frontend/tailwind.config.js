/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

