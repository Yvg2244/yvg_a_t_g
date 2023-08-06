import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactIconsBI from 'react-icons/bi';
// https://vitejs.dev/config/
export default defineConfig({
  
  build: {
    rollupOptions: {
      external: [
        reactIconsBI,
        // ...other external modules
      ],
    },
  },

  plugins: [react()]
})
