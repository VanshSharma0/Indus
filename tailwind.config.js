/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: ["Times New Roman", "serif"],
        Srisakdi: "cursive",
        sans: ["Montserrat", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        bodoni: ["BodoniBT-Book", "serif"],
        merriweather: ["Merriweather", "serif"],
        "french-canon": ["IM FELL French Canon", "serif"],
      },
    },
  },
  plugins: [],
};
