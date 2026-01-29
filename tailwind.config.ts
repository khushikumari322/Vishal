import type { Config } from "tailwindcss";

const customColorUtilities = {
  '.bg-background': { backgroundColor: 'hsl(var(--background))' },
  '.bg-card': { backgroundColor: 'hsl(var(--card))' },
  '.bg-popover': { backgroundColor: 'hsl(var(--popover))' },
  '.bg-primary': { backgroundColor: 'hsl(var(--primary))' },
  '.bg-secondary': { backgroundColor: 'hsl(var(--secondary))' },
  '.bg-accent': { backgroundColor: 'hsl(var(--accent))' },
  '.bg-muted': { backgroundColor: 'hsl(var(--muted))' },
  '.bg-destructive': { backgroundColor: 'hsl(var(--destructive))' },
  '.text-foreground': { color: 'hsl(var(--foreground))' },
  '.text-card-foreground': { color: 'hsl(var(--card-foreground))' },
  '.text-popover-foreground': { color: 'hsl(var(--popover-foreground))' },
  '.text-primary-foreground': { color: 'hsl(var(--primary-foreground))' },
  '.text-secondary-foreground': { color: 'hsl(var(--secondary-foreground))' },
  '.text-accent-foreground': { color: 'hsl(var(--accent-foreground))' },
  '.text-muted-foreground': { color: 'hsl(var(--muted-foreground))' },
  '.text-destructive-foreground': { color: 'hsl(var(--destructive-foreground))' },
  '.border-border': { borderColor: 'hsl(var(--border))' },
  '.border-input': { borderColor: 'hsl(var(--input))' },
  '.ring-ring': { '--tw-ring-color': 'hsl(var(--ring))' },
  '.ring-offset-background': { '--tw-ring-offset-color': 'hsl(var(--background))' },
};

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          cyan: "#00E5FF",
          magenta: "#FF3DAB",
          purple: "#8A4DFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(20px) rotate(-2deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        glow: "glow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-up": "scale-up 0.5s ease-out",
        orbit: "orbit 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "neon-gradient": "linear-gradient(135deg, #00E5FF, #8A4DFF, #FF3DAB)",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 229, 255, 0.4)",
        "glow-magenta": "0 0 30px rgba(255, 61, 171, 0.4)",
        "glow-purple": "0 0 30px rgba(138, 77, 255, 0.4)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.1)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities(customColorUtilities, ['responsive', 'hover', 'focus', 'active', 'group-hover']);
    },
  ],
} satisfies Config;
