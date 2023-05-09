import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/var.scss" as *;`,
      },
    },
  },
  plugins: [react()],
})
