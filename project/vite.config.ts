import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Set to true to listen on all network interfaces
    port: 3000, // Specify the port you want to use (default is 5173)
    open: true, // Automatically open the browser when the server starts
  },
});
