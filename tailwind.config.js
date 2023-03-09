module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkbg: "#1e293b",
        blue: {
          850: "#1e3d11",
        },
      },
      screens: {
        other: {
          min: "0px",
          max: "685px",
        },
      },
    },
  },
  plugins: [],
};
