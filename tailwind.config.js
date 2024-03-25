/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{html,js,jsx}",
  "./pages/**/*.{html,js,jsx}",
  "./components/**/*.{html,js,jsx}",
  "./index.html",
  "./node_modules/flowbite/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

