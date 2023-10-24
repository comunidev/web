// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, transformerDirectives } from "unocss"
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,astro}"],
  },
  presets: [presetRemToPx(), presetUno(), presetWebFonts({
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
      }
    }
  },
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  },
  transformers: [transformerDirectives()]
})
