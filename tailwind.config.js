/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:
      {
        'Rellieva' : ['Rellieva', 'sans-serif'],
        'harlow' : ['harlow' , 'sans-serif']
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

