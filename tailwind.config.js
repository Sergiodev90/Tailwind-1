/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    // fontFamily:{
    //   display:['Gilroy', 'sans-serif'],
    //   body:['graphik', 'sans-serif'],
    // },
    extend: {
      colors:{
        primary: '#f3c614',
        secondary: '#353535',
        tertiary: '#6e6e6e',
      },
      backgroundImage:{
        hero_pattern: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=667&amp;q=80')"
      },
      height:{
        100: '30rem',
      }
    },
  },
  plugins: [],
}

