import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  appType: 'spa', // 👈 this replaces historyApiFallback for SPA routing
  build: {
    outDir: 'dist',
  },
})
