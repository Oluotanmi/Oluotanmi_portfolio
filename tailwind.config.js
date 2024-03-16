/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '2xl':'2.967rem',
      },
      backgroundImage:{
        'background-img': 'url(/public/pexels-robin-stickel-70497.jpg)'
      },
      width:{
        '25':'8rem',
        '30':'10rem',
        '35':'15rem',
        '40':'20rem',
        '45':'25rem'
      },
      screens: {
          'sm': '240px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
    },
  },
  plugins: [],
}
