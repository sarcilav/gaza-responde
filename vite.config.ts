import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'gaza-responde' to your actual GitHub repository name
  // If your repo is https://github.com/user/my-book-site, this should be '/my-book-site/'
  base: '/gaza-responde/', 
});