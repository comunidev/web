import { defineConfig, defineGlobalStyles } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],
  globalCss: defineGlobalStyles({
    "h1,h2,h3,h4,h5,p,a,ul,li,span": {
      fontFamily: "Fira Sans, sans-serif",
    },
    "code, code *": {
      fontFamily: "Fira Code, consolas, monospace",
    },
  }),
  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          "brand-bg": { value: "#010F1A" },
          "brand-primary": { value: "#1AD56C" },
          "brand-secondary": { value: "#E6F36E" },
          "accent-yellow": { value: "#E7EE4E" },
          "accent-lime": { value: "#A9FF4B" },
          "accent-cyan": { value: "#4EE7EE" },
          "accent-pink": { value: "#EE4EE7" },
        },
        sizes: {
          xs: { value: "20rem" },
          sm: { value: "24rem" },
          md: { value: "28rem" },
          lg: { value: "32rem" },
          xl: { value: "36rem" },
          "2xl": { value: "42rem" },
          "3xl": { value: "48rem" },
          "4xl": { value: "56rem" },
          "5xl": { value: "64rem" },
          "6xl": { value: "72rem" },
          "7xl": { value: "80rem" },
          "8xl": { value: "90rem" },
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",


})
