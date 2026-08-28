// src/api/osm.js
import axios from 'axios';

// 创建 axios 实例，配置基础 URL 和超时时间
const osmApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org', // 使用 Nominatim 服务
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器（可选）：可以统一添加 User-Agent（Nominatim 要求）
osmApi.interceptors.request.use(
    (config) => {
        // Nominatim 要求设置 User-Agent 或提供联系邮箱
        config.headers['User-Agent'] = 'YourAppName/1.0 (1971217559@qq.com)';
        return config;
    },
    (error) => Promise.reject(error)
);

// 响应拦截器（可选）：统一处理错误，防止每个组件都写 try/catch
osmApi.interceptors.response.use(
    (response) => response.data, // 直接返回 data，简化调用
    (error) => {
        // 可以在这里统一 toast 提示等
        return Promise.reject(error);
    }
);
