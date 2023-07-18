/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akaya: ["Akaya Kanadaka"],
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
