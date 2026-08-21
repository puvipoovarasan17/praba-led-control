import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  // Ensure base is correctly set for GitHub Pages deployment.
  // Replace 'led-curtain-control' with your actual github repository name when you push to github.
  base: './', 
})
