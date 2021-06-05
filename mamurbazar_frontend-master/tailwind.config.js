module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
        mavenpro: ["Maven Pro", "sans-serif"],
      },
      colors: {
        1: "#f6c453",
        2: "#fefbe9",
        3: "#f0a04b",
        4: "#183a1d",
        5: "e1eedd",
      },
      backgroundColor: {
        1: "#f6c453",
        2: "#fefbe9",
        3: "#f0a04b",
        4: "#183a1d",
        5: "e1eedd",
      },
      spacing: {
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {
      display: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
