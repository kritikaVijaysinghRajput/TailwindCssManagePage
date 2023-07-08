/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedlight:'hsl(12,88%,69%)',
        brightRedlight:'hsl(12,88%,95%)',
        darkblue:'hsl(228, 39%, 69%)',
        darkblue:'hsl(227, 12%, 13%)',
        darkgreen:'hsl(147, 50%, 47%)',
        veryDarkBlue:'hsl(223, 12%, 13%)',
        darkPaleRed:'hsl(13, 100%, 96%)',
        veryLightGray:'hsl(0, 0%, 98%)',
        darkGrayishblue:'hsl(227, 12%, 13%)',
        
      },
    },
  },
  plugins: [],
}

