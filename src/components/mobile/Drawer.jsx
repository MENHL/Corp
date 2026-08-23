import { useState } from 'react';
import { Drawer } from 'antd';

function MobileDrawer({ open, onClose }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const items = [
        { label: '首页', key: 'home' },
        { label: '产品', key: 'product' },
        { label: '案例', key: 'case' },
        { label: '关于', key: 'regards' },
        { label: '新闻', key: 'journalism' },
    ];

    return (
        <Drawer
            title="导航栏"
            placement="right"
            size={200}
            open={open}
            onClose={onClose}
            closable={{ placement: 'end' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {items.map((item, index) => {
                    const isActive = selectedIndex === index;
                    return (
                        <p
                            key={item.key}
                            style={{
                                fontWeight: 'bold',
                                color: isActive ? 'white' : 'gray',
                                backgroundColor: isActive ? 'black' : 'transparent',
                                cursor: 'pointer',
                                margin: '4px 0',
                                padding: '10px 16px',
                                borderRadius: '6px',
                                fontSize: '16px',
                                transition: 'all 0.2s ease',
                            }}
                            onClick={() => setSelectedIndex(index)}
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