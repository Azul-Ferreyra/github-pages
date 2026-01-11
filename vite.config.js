import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/github-pages/' : '/', // Base path solo para producción
  build: {
    // Minificar y optimizar
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remover console.logs en producción
        drop_debugger: true,
      },
    },
    // Generar source maps solo en desarrollo
    sourcemap: false,
    // Optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser'],
        },
      },
    },
  },
  server: {
    // Configuración segura del servidor de desarrollo
    host: true,
    port: 5173,
    strictPort: false,
    // CORS solo para desarrollo
    cors: {
      origin: process.env.NODE_ENV === 'development' ? '*' : false,
      credentials: false,
    },
  },
  // Variables de entorno seguras
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
