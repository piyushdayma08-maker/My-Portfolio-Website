import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accentA: "rgb(var(--accentA) / <alpha-value>)",
        accentB: "rgb(var(--accentB) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--border) / 0.85), 0 18px 60px rgb(2 6 23 / 0.10)"
      },
      backgroundImage: {
        "accent-radials":
          "radial-gradient(900px circle at 18% 12%, rgb(var(--accentA) / 0.16), transparent 46%), radial-gradient(900px circle at 78% 10%, rgb(var(--accentB) / 0.14), transparent 48%), radial-gradient(800px circle at 55% 115%, rgb(15 23 42 / 0.05), transparent 55%)",
        "grid-lines":
          "linear-gradient(to right, rgb(15 23 42 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
} satisfies Config;
