/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'header': '0px -1px 0px 0px #E2E2EA inset',
      }
    },
  },
  plugins: [],
}