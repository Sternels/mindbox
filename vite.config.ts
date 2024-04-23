import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todos",
  plugins: [react(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 3000
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/styles/_index.scss";`
      }
    }
  },
})
