import osmApi from 'axios';


/**
 * 地理编码（地址 → 经纬度）
 * @param {string} query 地址
 * @param {number} limit 返回结果数量
 * @returns {Promise<Array>} 始终返回数组，失败时返回空数组
 */
export const geocode = async (query, limit = 5) => {
    // 空查询直接返回空数组
    if (!query || !query.trim()) {
        return [];
    }

    try {
        const response = await osmApi.get('/search', {
            params: { q: query, limit },
        });
        // 确保返回的是数组
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        // 所有网络/服务器错误都返回空数组，组件无需额外处理
        console.warn('地理编码请求失败，返回空结果');
        return [];
    }
};