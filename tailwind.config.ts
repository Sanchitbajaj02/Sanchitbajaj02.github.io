import type { Config } from "tailwindcss";

/**
 * Single source of truth for the theme.
 * Every token mirrors a CSS variable defined in src/styles/globals.css,
 * so the same palette/typography is available via:
 *   - Tailwind utilities (e.g. `bg-surface-1`, `text-accent`, `text-fs-3`)
 *   - Raw CSS (`var(--accent)`, `var(--fs-3)`)
 *   - Legacy class names in style.css (already aliased to the same vars)
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
        ink: {
          strong: "var(--text-strong)",
          base: "var(--text-base)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border-1)",
        },
      },
      fontFamily: {
        sans: ["var(--ff-poppins)", "Poppins", "sans-serif"],
      },
      fontSize: {
        // Mirror legacy --fs-1..8 so utilities and CSS vars stay in lock-step
        "fs-1": ["var(--fs-1)", { lineHeight: "1.2" }],
        "fs-2": ["var(--fs-2)", { lineHeight: "1.3" }],
        "fs-3": ["var(--fs-3)", { lineHeight: "1.35" }],
        "fs-4": ["var(--fs-4)", { lineHeight: "1.4" }],
        "fs-5": ["var(--fs-5)", { lineHeight: "1.5" }],
        "fs-6": ["var(--fs-6)", { lineHeight: "1.6" }],
        "fs-7": ["var(--fs-7)", { lineHeight: "1.6" }],
        "fs-8": ["var(--fs-8)", { lineHeight: "1.6" }],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 18px 40px hsla(0, 0%, 0%, 0.35)",
        glow: "0 0 18px hsla(38, 95%, 62%, 0.55)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
