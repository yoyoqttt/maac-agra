import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optional: server configuration (e.g., port)
  // server: {
  //   port: 3000,
  // },
  // Optional: base path if deploying to a subdirectory
  // base: '/my-animation-site/',
})