import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@icons': path.resolve(__dirname, 'src/components/Icons'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@Images': path.resolve(__dirname, 'src/components/Image'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@api': path.resolve(__dirname, 'src/apis'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
    }
  }
})
