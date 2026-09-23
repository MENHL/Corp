import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/React_Corp/',  // 上传githup必须的配置
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 手机端在线查看
  server: {
    port: 5173,   // 可选，指定端口，默认是 5173
  },
})
