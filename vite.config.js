import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Myportfolio/', // Replace "Myportfolio" with your repository name
});
