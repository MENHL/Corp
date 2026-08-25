import { Drawer } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function MobileDrawer({ open, onClose }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoverKey, setHoverKey] = useState(null);

    const items = [
        { label: '首页', key: 'home' },
        { label: '产品', key: 'product' },
        { label: '案例', key: 'case' },
        { label: '关于', key: 'regards' },
        { label: '新闻', key: 'journalism' },
    ];

    const getSelectedKey = () => {
        const path = location.pathname;
        const key = path.replace('/', '');
        return key || 'home';
    };

    const selectedKey = getSelectedKey();

    const handleItemClick = (key) => {
        navigate(`/${key}`);
        onClose();
    };

    return (
        <Drawer
            title="Corp"
            placement="top"
            size={400}
            open={open}
            onClose={onClose}
            closable={{ placement: 'end' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {items.map((item) => {
                    const isActive = selectedKey === item.key;
                    const isHovered = hoverKey === item.key;

                    // 文字颜色：悬停且非激活 → 黑色，激活 → 白色，否则灰色
                    const color = isHovered && !isActive ? 'black' : (isActive ? 'white' : 'gray');

                    // 背景颜色：激活 → 黑色，悬停且非激活 → 浅灰色，否则透明
                    let backgroundColor = 'transparent';
                    if (isActive) {
                        backgroundColor = 'black';
                    } else if (isHovered) {
                        backgroundColor = '#f5f5f5'; // 浅灰色，可根据喜好调整
                    }

                    return (
                        <p
                            key={item.key}
                            style={{
                                fontWeight: 'bold',
                                color: color,
                                backgroundColor: backgroundColor,
                                cursor: 'pointer',
                                margin: '4px 0',
                                padding: '10px 16px',
                                borderRadius: '6px',
                                fontSize: '16px',
                                transition: 'all 0.2s ease',
                            }}
                            onClick={() => handleItemClick(item.key)}
                            onMouseEnter={() => setHoverKey(item.key)}
                            onMouseLeave={() => setHoverKey(null)}
                        >
                            {item.label}
                        </p>
                    );
                })}
            </div>
        </Drawer>
    );
}

export default MobileDrawer;