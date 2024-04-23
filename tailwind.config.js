/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'abril': ['Abril Fatface', 'serif'],
    },
    extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ]
}