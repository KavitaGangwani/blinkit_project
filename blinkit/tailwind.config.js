const { faStackOverflow } = require('@fortawesome/free-brands-svg-icons');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%,50%, 100%': { transform: 'rotate(-8deg)' },
          '25%,75%': { transform: 'rotate(8deg)' },
        },
        inputPlace: {
          '0% ': {
             transform : 'translateY(122%)',
            
            
             
            },
          '50%': { 
            top : '22%',
          
            
            
           },
          '100%': { 
            transform : 'translateY(-130%)',
            
         
         },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ',
        inputPlace: 'inputPlace 1.5s infinite ',
      },
    },
  },
  plugins: [],
}