/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg: "#111111",
        secondaryBg: "#777777",
        hoverBg: "#CB450C",
        primaryTextColor: "#777777",
        secondaryTextColor: "#aaaaaa",
        borderColor: "#777777"
      },
      fontFamily:{
        bebas: "Bebas Neue, sans-serif",
        robot: "Roboto, sans-serif",
        poppings: "Poppins, sans-serif"
      },
      fontSize:{
        xlHeading: "292px",
        lgHeading: "233px",
        mdHeading: "168px",
        smHeading: "143px",
        mobileHeading: "140px",
        phoneHeading: "70px"
      },
      boxShadow:{
        'custom-orange': '0px 12px 32px rgba(203, 69, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

