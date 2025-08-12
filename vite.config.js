// vite.config.js at project root
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<user>.github.io/<repo>/ set base to '/<repo>/'
// If deploying to https://<user>.github.io/ (root site), leave base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/oi-vite-landing/' // <-- change to your repo name (or '/' for root user site)
})
