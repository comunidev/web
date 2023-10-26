import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import { defineConfig as viteDefineConfig } from "vite";
import mdx from "@astrojs/mdx";
import pandacss from '@pandacss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), mdx(), pandacss()],
  vite: viteDefineConfig({
    plugins: [
      /*
      Uncomment the following line to enable solid-devtools.
      For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
      */
      // devtools(),
    ],
    server: {
      port: 3000,
      proxy: {
        '/socket.io': {
          target: 'http://localhost:4500',
          changeOrigin: true,
          ws: true,
        }
      }
    },
    build: {
      target: 'esnext',
    },
  }),
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    },
  }
});
