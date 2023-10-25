// uno.config.ts
import { defineConfig, presetUno, presetTagify, presetWebFonts, transformerDirectives, presetAttributify, transformerVariantGroup, transformerAttributifyJsx } from "unocss"
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,astro}"],
  },
  presets: [presetTagify(), presetAttributify(), presetRemToPx(), presetUno(), presetWebFonts({
    provider: 'google',
    fonts: {
      sans: 'Fira Sans',
      mono: 'Fira Mono'
    },
  })],
  theme: {
    colors: {
      "brand": {
        "bg": "#010F1A",
        "primary": "#1AD56C",
        "secondary": "#E6F36E",
      },
      "accent-yellow": "#E7EE4E",
      "accent-lime": "#4EEE7E",
      "accent-cyan": "#4EE7EE",
      "accent-pink": "#EE4EE7",
    }
  },
  transformers: [transformerDirectives(), transformerAttributifyJsx(), transformerVariantGroup()]
})
