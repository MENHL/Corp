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
    // 获取当前路径（小写），忽略大小写匹配
    const currentPath = location.pathname.toLowerCase();
    // 查找与当前路径匹配的菜单项,查找匹配的菜单项（忽略大小写）
    const currentKey = items.find(item =>
        currentPath.startsWith(`/${item.key.toLowerCase()}`)
    )?.key || '';

    const onClick = (e) => {
        navigate(`/${e.key}`);
    };

    return (
        <Menu
            className="custom-menu"
            onClick={onClick}
            selectedKeys={[currentKey]}   // 若 currentKey 为空，则无高亮
            mode="horizontal"
            items={items}
        />
    );
}

export default Menus;