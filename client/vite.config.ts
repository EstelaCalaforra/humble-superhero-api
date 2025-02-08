import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const PROD_API_URL = process.env.CORS_ORIGIN_PROD
console.log({PROD_API_URL})

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
