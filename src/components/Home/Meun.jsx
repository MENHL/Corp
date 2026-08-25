// Menus.jsx
import './style/Meun.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const items = [
    { label: '首页', key: 'home' },
    { label: '产品', key: 'product' },
    { label: '案例', key: 'case' },
    { label: '关于', key: 'regards' },
    { label: '新闻', key: 'journalism' },
];

const Menus = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // 根据当前路径获取选中的 key（去掉开头的 '/'）
    const currentKey = location.pathname.replace('/', '') || 'home';

    const onClick = (e) => {
        navigate(`/${e.key}`);   // 跳转到对应路径
    };

    return (
        <Menu
            className="custom-menu "
            onClick={onClick}
            selectedKeys={[currentKey]}   // 高亮当前项
            mode="horizontal"
            items={items}
        />
    );
}

export default Menus;