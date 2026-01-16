/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "deep-charcoal": "#0F172A",
        "deep-navy": "#020617",
        "card-surface": "#1E293B",
        "card-border": "#334155",
      },
      fontFamily: {
        display: ["Geist", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
