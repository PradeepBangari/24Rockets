import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // This tells the React plugin to process JSX in .js files
      include: '**/*.{js,jsx}',
      babel: {
        plugins: [],
        babelrc: false,
        configFile: false,
      }
    })
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: "build",
  },
})