import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 手机端在线查看
  server: {
    host: true,   // 监听所有地址，包括局域网
    port: 5173,   // 可选，指定端口，默认是 5173
  },
})
