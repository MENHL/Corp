import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { geocode } from '../api/map';
import 'leaflet/dist/leaflet.css';

// 引入你的自定义 SVG 图标
import dizhiIconUrl from '../assets/dizhi.svg';

// 创建自定义图标
const customIcon = L.icon({
    iconUrl: dizhiIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const OfficeMap = () => {
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const mapRef = useRef(null);

    const officeAddress = '北京市朝阳区科技园路8号A座12层';

    // 获取初始坐标
    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const data = await geocode(officeAddress, 1);
                if (data && data.length > 0) {
                    const { lat, lon } = data[0];
                    setPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });
                } else {
                    setPosition({ lat: 39.9042, lng: 116.4074 });
                }
            } catch {
                setPosition({ lat: 39.9042, lng: 116.4074 });
            } finally {
                setLoading(false);
            }
        };
        fetchCoordinates();
    }, []);

    // 地图加载后：刷新尺寸 + 自动适配缩放
    const handleMapReady = () => {
        setTimeout(() => {
            if (mapRef.current) {
                // 刷新地图尺寸（手机端适配）
                mapRef.current.invalidateSize();

                // === 新增：自动适配到合适的缩放级别 ===
                // 如果标记位置存在，让地图视野包含标记点及其周边 500 米范围
                if (position) {
                    const bounds = L.latLngBounds([
                        [position.lat - 0.08, position.lng - 0.08],
                        [position.lat + 0.08, position.lng + 0.08],
                    ]);
                    mapRef.current.fitBounds(bounds, { padding: [30, 30] });
                }
            }
        }, 500);
    };

    // 处理地图点击事件
    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });
        console.log('点击位置：', lat, lng);
    };

    if (loading) {
        return (
            <div style={{
                height: '100%',
                minHeight: '320px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                加载地图中...
            </div>
        );
    }

    return (
        <MapContainer
            ref={mapRef}
            center={position || [39.9042, 116.4074]}
            zoom={15}  // 初始 zoom，但会被 fitBounds 覆盖
            style={{ height: '100%', width: '100%', minHeight: '320px' }}
            whenReady={handleMapReady}
            onClick={handleMapClick}
        >
            <TileLayer
                url="https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
                attribution='&copy; 高德地图'
            />
            {position && (
                <Marker position={[position.lat, position.lng]} icon={customIcon}>
                    <Popup>
                        {officeAddress}<br />
                        坐标：{position.lat.toFixed(6)}, {position.lng.toFixed(6)}
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default OfficeMap;