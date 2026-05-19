import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  safelist: [
    "from-signal-blue",
    "to-signal-cyan",
    "from-rose-500",
    "to-orange-400",
    "from-sky-500",
    "to-blue-600",
    "from-slate-700",
    "to-slate-950"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          ink: "#111827",
          soft: "#536179",
          mist: "#eef3f8",
          panel: "rgba(255,255,255,0.62)",
          line: "rgba(123,144,170,0.22)"
        },
        signal: {
          blue: "#2f6fed",
          cyan: "#54c7ec",
          violet: "#7c5cff",
          green: "#4ec9a2"
        }
      },
      boxShadow: {
        glass: "0 24px 80px rgba(31, 45, 71, 0.14)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.75)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 15%, rgba(47,111,237,0.18), transparent 32%), radial-gradient(circle at 84% 12%, rgba(84,199,236,0.16), transparent 30%), linear-gradient(180deg, #f7faff 0%, #eef3f8 45%, #e9eef6 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.82" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        glow: "glow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
