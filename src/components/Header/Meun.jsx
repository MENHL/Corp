// Menus.jsx
import './style/Meun.scss'
import { useState } from 'react';
import { Menu } from 'antd';

const items = [
    { label: '首页', key: 'home' },
    { label: '产品', key: 'product' },
    { label: '案例', key: 'case' },
    { label: '关于', key: 'regards' },
    { label: '新闻', key: 'journalism' },
];

const Menus = () => {
    const [current, setCurrent] = useState('product');
    const onClick = e => setCurrent(e.key);

    return (
        <Menu
            className="custom-menu "
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

export default Menus;