import './style/case.scss'
import { Button } from 'antd';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function Case() {
    const [size] = useState('large');
    const navigate = useNavigate();
    const location = useLocation();

    // 根据当前路径设置 activeTab
    const getActiveTab = (pathname) => {
        if (pathname === '/case' || pathname === '/case/alls') return '全部';
        if (pathname.includes('/case/finance')) return '金融';
        if (pathname.includes('/case/medical')) return '医疗';
        if (pathname.includes('/case/education')) return '教育';
        if (pathname.includes('/case/retail')) return '零售';
        return '全部'; // 默认
    };

    const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));

    // 监听路由变化，更新高亮
    useEffect(() => {
        setActiveTab(getActiveTab(location.pathname));
    }, [location.pathname]);

    // 按钮配置：路径映射
    const tabs = [
        { label: '全部', path: '/case/alls' },
        { label: '金融', path: '/case/finance' },
        { label: '医疗', path: '/case/medical' },
        { label: '教育', path: '/case/education' },
        { label: '零售', path: '/case/retail' },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.path);
    };

    return (
        <div id='case' className='clone banner f'>
            <div className='contacts__title m'>
                <h1 className='l_title'>客户案例</h1>
                <div className='btn-box'>
                    {tabs.map(tab => (
                        <Button
                            key={tab.label}
                            color="default"
                            shape="round"
                            variant="solid"
                            size={size}
                            className='bt'
                            style={
                                activeTab === tab.label
                                    ? { backgroundColor: '#000', color: '#fff', borderColor: '#000' }
                                    : { backgroundColor: 'transparent', color: '#333', borderColor: '#d9d9d9' }
                            }
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab.label}
                        </Button>
                    ))}
                </div>
                <ul className='case-box'>
                    <Outlet />
                </ul>
            </div>
        </div>
    );
}

export default Case;