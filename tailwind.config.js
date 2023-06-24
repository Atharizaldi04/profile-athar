/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#10b981'
      },
      screens: {
        '2xl' : '1320px'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "25%"
          }  
        },
        typing2: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "45%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      }
    },
    animation: {
      typing: "typing2 3s steps(20) infinite alternate, blink .7s infinite",
      typinglarge: "typing 3s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [],
}

