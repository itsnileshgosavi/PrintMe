/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://printify.com/pfh/media/background-IAMAETLT.svg')",
        "connect-pattern": "url('https://printify.com/pfh/media/stores-background-QSGENTOX.svg')",
      },
      colors:{
        'primary':'#0D0D0D',
        'secondary':'#171717',
        'accent':'#F9F9F9',
        'neutral':'#FFFFFF',
      }
    },
  },
  plugins: [],
}

