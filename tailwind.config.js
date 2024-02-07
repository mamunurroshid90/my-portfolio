/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1400px",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
      },
      fontFamily: {
        dancing: "Dancing Script, cursive",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(30) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
