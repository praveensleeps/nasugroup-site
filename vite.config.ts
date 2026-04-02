import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/job-openings.json': {
        target: 'http://nasugroup.com',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Ensure this is required
  },
  base: './', // Use './' for relative paths
  build: {
    outDir: 'dist', // Default output directory
    assetsDir: 'assets', // Directory for assets
    emptyOutDir: true, // Clear the output directory before building
    sourcemap: true, // Include sourcemaps for debugging
    minify: 'terser', // Minification using Terser
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single chunk for simplicity
        entryFileNames: 'assets/[name].js', // Entry file naming
        chunkFileNames: 'assets/[name].js', // Chunk file naming
        assetFileNames: 'assets/[name].[ext]', // Asset file naming
      },
    },
  },
});
