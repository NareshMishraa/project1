import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project1/', // 👈 This sets the correct base path for GitHub Pages
  plugins: [react()],
});
