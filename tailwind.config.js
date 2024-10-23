/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: '#78534a',
        customColor: '#48755f',
        design : '#110f1a',
        headerColor: '#e4b8ad',
        texture:'#a9a8ac'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}