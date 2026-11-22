import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set to '/<repo-name>/' if deploying to a GitHub Pages project site.
  base: '/',
  plugins: [react(), tailwindcss()],
})
