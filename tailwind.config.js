/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      xl: "1024px",
    },
    fontFamily: {
      title: ["Darker Grotesque"],
      sm: ["Public Sans"],
    },
    fontSize: {
      title: [
        "2.875rem",
        {
          lineHeight: ["3.125rem"],
        },
      ],
      sm: [
        "1.5rem",
        {
          lineHeight: ["1.813rem"],
        },
      ],
      titleDesktop: ["3.25rem"],
      h1Desktop: ["4.514rem"],
      buttonMobile: [
        "0.577rem",
        {
          letterSpacing: ["0.2em"],
        },
      ],
      buttonDesktop: [
        "0.899rem",
        {
          letterSpacing: ["0.2em"],
        },
      ],
      cardTitle: ["1.113rem"],
      cardTitleDesktop: ["1.688rem"],
      cardText: ["0.733rem"],
      cardTextDesktop: ["1.111rem"],
      cardTextDesktop2: ["0.986rem"],
      questionFaq: ["0.800rem"],
      labelForm: ["0.694rem"],
    },

    extend: {
      backgroundImage: {
        stepByStep: "url('/src/assets/images/background.png')",
        gradient10: "linear-gradient(64.7deg, #010014 49.71%, #08025d 100%)",
        gradient20: "linear-gradient(260.15deg, #010014 0%, #070e37 100%)",
        gradient30:
          "linear-gradient(270deg, #0524DD 38.85%, rgba(5, 36, 221, 0) 100%);",
        gradient40: "linear-gradient(180deg, #0C0C0C 0%, #08025D 100%)",
        efeito: "url('/src/assets/images/EFEITO.png')",
      },
    },
  },
  plugins: [],
};
