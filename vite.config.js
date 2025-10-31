import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages (repo name as base)
  base: '/projecct2/',
})
