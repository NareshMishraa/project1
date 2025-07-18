import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
      // base: '/your-repo-name/', // 👈 important for GitHub Pages/
      // plugins: [react()],
      tailwindcss(),
      
  ],
})