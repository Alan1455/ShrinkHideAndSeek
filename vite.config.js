import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/ShrinkTag/',
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: {
        quality: 60,
        lossless: false,
      },
    }),
  ],
})

