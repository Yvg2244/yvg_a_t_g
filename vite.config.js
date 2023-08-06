import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      // No need to specify external modules here
    },
  },
  plugins: [react()],
});