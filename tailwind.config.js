/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        moccaBlue: "#004aad",
        moccaWhite: "#FFFFFC",
        moccaBlack: "#001011",
        moccaGray: "#353535",
        moccaGrayT: "#353535ea",
      },
    },
  },
  plugins: [],
};
