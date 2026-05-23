/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        secondary: "#FFD700",
        accent: "#4ECDC4",
        dark: "#2C3E50",
      },
      fontFamily: {
        fun: ["Fredoka One", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        toytopia: {
          primary: "#FF6B35",
          secondary: "#FFD700",
          accent: "#4ECDC4",
          neutral: "#2C3E50",
          "base-100": "#FFFBF5",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
