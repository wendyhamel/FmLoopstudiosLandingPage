/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/content.js"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Alata', 'sans-serif'],
        'display': ['Josefin\\ Sans', 'sans-serif'],
      },
      fontSize: {
        'body': ['15px', '22px'],
      },
      colors: {
        gray: 'hsl(0, 0%, 55%)',
        dark: 'hsl(0, 0%, 41%)',
      }
    },
  },
  plugins: [],
}

