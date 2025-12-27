import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Build with base '/' - App.jsx will handle routing for both custom domain and GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/',
})
