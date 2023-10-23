// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, transformerDirectives } from "unocss"

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,astro}"],
  },
  presets: [presetUno(), presetWebFonts({
    provider: 'google',
    fonts: {
      sans: 'Fira Code',
      mono: 'Fira Mono'
    }
  })],
  transformers: [transformerDirectives()]
})
