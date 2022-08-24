/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {


      colors: {


        'font-violet': 'hsl(279, 6%, 55%)',
        'font-grey': 'rgb(168,168,168)',
        'error': ' hsl(0, 100%, 66%)',
        'changer': 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)'
      },

      backgroundColor: {

         'dark-violet':  'hsl(278, 68%, 11%)',
         'grey': 'rgb(168,168,168)',
         
      },

      backgroundImage: {
        'desktop-main-image': 'url(images/bg-main-desktop.png)',
        'mobile-main-image': 'url(images/bg-main-mobile.png)',
        'front-image': 'url(images/bg-card-front.png)',
        'back-image': 'url(images/bg-card-back.png)',
        

      },

      letterSpacing: {


        wide: '.12em'
      }
    },
  },
  plugins: [],
}