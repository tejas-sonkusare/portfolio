import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1c",
        foreground: "#e6f1ff",
        neon: {
          blue: "#00e5ff",
          cyan: "#22d3ee",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 229, 255, 0.35)",
      },
      backgroundImage: {
        'glass-gradient':
          'radial-gradient(1200px 600px at 100% 0%, rgba(34,211,238,0.08), rgba(10,15,28,0)), radial-gradient(800px 400px at 0% 100%, rgba(0,229,255,0.06), rgba(10,15,28,0))'
      }
    },
  },
  plugins: [],
};

export default config;


