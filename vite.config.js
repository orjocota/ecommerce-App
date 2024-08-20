import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://orjocota.github.io/ecommerce-App",
  build:{chunkSizeWarningLimit: 1600,}
})
