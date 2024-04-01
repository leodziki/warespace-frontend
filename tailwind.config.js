/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        eerieblack: "#202020",
        warespaceblue: "#042F85",
        quicksilver: {
          50: "#DEDEDE",
          100: "#D2D2D2",
          200: "#C7C7C7",
          300: "#BCBCBC",
          400: "#B1B1B1",
          500: "#A7A7A7",
          600: "#919191",
          700: "#7C7C7C",
          800: "#686868",
          900: "#535353",
        },
        platinumwhite: {
          50: "#F7F7F7",
          100: "#F5F5F5",
          200: "#F2F2F2",
          300: "#F0F0F0",
          400: "#EDEDED",
          500: "#EAEAEA",
          600: "#CDCDCD",
          700: "#B0B0B0",
          800: "#939393",
          900: "#757575",
        },
        snowwhite: "#FCFDFF",
        wsblue: {
          50: "#78A3FB",
          100: "#4A85F9",
          200: "#1D66F8",
          300: "#074FE0",
          400: "#063FB3",
          500: "#042F85",
          600: "#042975",
          700: "#032364",
          800: "#031E53",
          900: "#021843",
        },
        slateblue: {
          50: "#B4BCE8",
          100: "#9CA6E0",
          200: "#8390D9",
          300: "#6A79D1",
          400: "#5163CA",
          500: "#3B4FBF",
          600: "#3345A7",
          700: "#2C3B8F",
          800: "#253177",
          900: "#1D2760",
        },
        violetblue: {
          50: "#C0C3F2",
          100: "#ABAFED",
          200: "#969BE9",
          300: "#8187E4",
          400: "#6C73E0",
          500: "#5860DC",
          600: "#3742D5",
          700: "#2832BD",
          800: "#212A9E",
          900: "#1B217E",
        },
        redcrayola: {
          50: "#F9B1BD",
          100: "#F797A7",
          200: "#F57D91",
          300: "#F3627B",
          400: "#F14865",
          500: "#EF2E4E",
          600: "#E81135",
          700: "#C70F2E",
          800: "#A60C26",
          900: "#850A1E",
        },
        sizzlingred: {
          50: "#FFBAC2",
          100: "#FFA3AE",
          200: "#FF8C9A",
          300: "#FF7585",
          400: "#FF5E71",
          500: "#FF475D",
          600: "#FF1F39",
          700: "#F5001D",
          800: "#CC0018",
          900: "#A30013",
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      noir: ['Noir', 'sans-serif']
    }
  },

  plugins: [],
};
