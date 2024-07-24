/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        imagen1: ["url('/images/img1.jpg')"],
        puntos: ["url(images/puntos.png)"],
        fondo1:["url(images/city1.png)"],
        color1:["url(images/color1.png)"],
        tecno1:["url(images/tecno1.png)"],
        fondo:["url(images/fondSo.png)"],
        fondoBlue:["url(images/fondoBlue.png)"],
        ltecsa1:["url(https://i.imgur.com/sYE9VGK.png)"]
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        icones: ["Icones"],
        anton: ["Anton", "sans-serif;"],
        merry: ["Merriweather", "serif;"],
        girasol: ["Girassol", "cursive;"],
        ubuntu: ["Ubuntu", "sans-serif;"],
        fira: ["Fira Sans", "sans-serif;"],
        nunito: ['Nunito', "sans-serif;"]
      },
    },
    animation: {
      move: "move 20s linear infinite",
    },
  },

  daisyui: {
    themes: [
      "light",
      "mytheme",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        mytheme: {
          primary: "#057aff",

          secondary: "#463aa1",

          accent: "#c149ad",

          neutral: "#021431",

          "base-100": "#ffffff",

          info: "#93e6fb",

          success: "#80ced1",

          warning: "#efd8bd",

          error: "#e58b8b",
        },
      },
    ],
  },

  darkMode: "class",
  plugins: [require("daisyui", "@tailwindcss/animation"), nextui()],
};
