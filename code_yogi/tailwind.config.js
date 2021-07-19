// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'AuthHero': 'rgb(6 8 24)'
      }),
      backgroundImage: theme => ({
        'Auth': "url('shield.webp')",

      }),
      backgroundSize: {
        '3/4':'75%'
      },
      screens: {
        'Auth':'992px'
      },
      fontSize:{
        'Login':'2.5rem'
      },
      textColor: {
        'indigoish':'#4361ee'
     },
     colors:{
      'indigoish':'#4361ee',
      'grayish':'#3b3f5c'
     },
     spacing:{
       '97.1485':'24.287125rem',
       '148.8985':'37.224625rem',
       '2.8715':'0.717875rem',
       '11.4285':'2.85714375rem',
       '2.75':'0.6875rem',
       '6.25':'1.5625rem',
       '12.5':'3.125rem',
       '1.75':'0.4375rem',
       '5':'1.25rem',
     },
     fontFamily:{
       'body':['Nunito', 'sans-serif' ]
      
      
      
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}