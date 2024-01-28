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
    },
  },
  plugins: [require("daisyui")],
};
