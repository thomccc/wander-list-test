/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@wandercom/design-system-web/dist/**/*.js",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Wander design system semantic tokens
        tertiary: "var(--color-tertiary)",
        selected: "var(--color-border-selected)",
        "surface-primary": "var(--color-surface-primary)",
        "surface-secondary": "var(--color-surface-secondary)",
        "surface-modal": "var(--color-surface-modal)",
        "border-primary": "var(--color-border-primary)",
        "border-secondary": "var(--color-border-secondary)",
        // Wander button tokens
        "button-primary": "var(--color-button-primary)",
        "button-secondary": "var(--color-button-secondary)",
        "button-outline": "var(--color-button-outline)",
        "button-ghost": "var(--color-button-ghost)",
        "button-destructive": "var(--color-button-destructive)",
        "button-checkout": "var(--color-button-checkout)",
        "text-button-primary": "var(--color-text-button-primary)",
      },
      fontSize: {
        "body-sm": ["0.75rem", { lineHeight: "0.9375rem" }],
        body: ["0.875rem", { lineHeight: "1.0625rem" }],
        "body-lg": ["1rem", { lineHeight: "1.25rem" }],
      },
      boxShadow: {
        dropdown:
          "0px 2px 8px 0px oklch(0 0 0 / 0.031), 0px 2px 16px 0px oklch(0 0 0 / 0.051)",
      },
    },
  },
  plugins: [],
}
