module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      paleOrange: "#ffede0",
      orange: "#ff7d1a",
    }),

    extend: {
      textColor: {
        orange: "#ff7d1a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
