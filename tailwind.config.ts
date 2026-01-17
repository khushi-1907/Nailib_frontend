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
        primary: "#136dec",
        "background-light": "#f6f7f8",
        "background-dark": "#101822",
        "accent-emerald": "#10b981",
        "accent-gold": "#f59e0b",
        "surface-dark": "#1a232e",
        "surface-dark-alt": "#080c14",
        "surface-dark-deep": "#05080c",
        "deep-charcoal": "#0F172A",
        "deep-navy": "#020617",
        "card-surface": "#1E293B",
        "card-border": "#334155",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
