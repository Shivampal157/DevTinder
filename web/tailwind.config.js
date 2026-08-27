/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        devtinder: {
          primary: "#3b82f6",
          secondary: "#ec4899",
          accent: "#22c55e",
          neutral: "#0f172a",
          "base-100": "#070b14",
          "base-200": "#0d1422",
          "base-300": "#151d2e",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};
