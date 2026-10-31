import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#087A50",
          hover: "#066341",
          light: "#E7F5EE",
          dark: "#054D33",
        },
        secondary: {
          DEFAULT: "#42B883",
          hover: "#359F70",
          light: "#EDF8F3",
        },
        mint: {
          50: "#F5FAF7",
          100: "#EAF5EE",
          200: "#D3ECE0",
        },
        surface: "#FFFFFF",
        textPrimary: "#1C2A24",
        textSecondary: "#52665E",
        textMuted: "#859790",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(8, 122, 80, 0.08)",
        hover: "0 10px 25px -3px rgba(8, 122, 80, 0.15)",
        card: "0 2px 12px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
