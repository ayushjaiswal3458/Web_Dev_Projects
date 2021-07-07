const colors = require("tailwindcss/colors");
module.exports = {
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary:{
        100:"#f1f8f6",
        200:"#d4e9e2",
        300:"#008248",
        400:"#1e3932",
        500:"#000000de",
        
      },
      secondary:"#f3f1e7",
      gray:colors.gray,
      white:colors.white,
      black:colors.black,
      golden:'#cba258',
      lightgrey:'#0000008f',
      face:'#f7f7f7'

    },
    fontFamily:{
      'sans':"'Helvetica Neue',Helvetica, Arial, sans-serif"  ,
    },

    extend: {
      backgroundImage: theme => ({
        
        
       }),
      fontSize:{
        13:'0.8125rem',
        28:'1.75rem',
        24:'1.5rem',
        19:'1.1875rem',
        '13px':'13px',
        '14px':'14px'
      },
      fontWeight:{
        'normal':'400',
        'semi':"600",
        'extrasemi':'700'
      },
      margin:{
        'mdCodes':'16.667%',
        'mdPay' : '5%'
      },
      minWidth:{
        '48%':'48%'
      },
      maxWidth:{
        '400px':'400px'
      },
      width:{
        '50%':'50%',
        '66.6%':'66.6%',
        
        
      },
      spacing:{
        '72':'72px',
        '158':'158px',
        '7px':'7px',
        '5px':'5px',
        '44px':'44px',
        '540px':'540px',
        '51px':'51px',
        '101px':'101px',
        '85px':'85px'
        
      },
      padding:{
        '99px':'99px',
        '131px':'131px',
        '152px':'152px'
      },
      boxShadow:{
        'footshadow':'0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%)',
        'GetFav':'inset 0 7px 9px -7px rgb(0 0 0 / 14%)',
        'NavLinks':'inset 0 -6px #008248',
        'Header':'0 4px 4px 0 rgb(0 0 0 / 12%), 0 0 2px 0 rgb(0 0 0 / 24%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],

};