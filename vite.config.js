import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages under a repo (not a custom domain or
// username.github.io root repo), uncomment the line below and set it
// to your repo name, e.g. base: '/mukesh-portfolio/'
export default defineConfig({
  plugins: [react()],
  // base: '/mukesh-portfolio/',
})
