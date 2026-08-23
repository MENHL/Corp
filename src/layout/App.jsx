import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import './App.css'
import Logo from '../components/Header/Logo'
import Meun from '../components/Header/Meun'
//* 移动端组件 */
import Hamburg from '../components/mobile/Hamburg'
import MobileDrawer from '../components/mobile/Drawer'

import { Layout, Row, Col, Button } from 'antd';
// 布局组件
function App() {
  const { Header, Footer, Content } = Layout;


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // 打开抽屉（仅在移动端允许）
  const showDrawer = () => {
    if (isMobile) {
      setIsDrawerOpen(true);
    }
  };

  // 关闭抽屉
  const onDrawerClose = () => setIsDrawerOpen(false);

  // 当屏幕宽度从移动端变为桌面端时，自动关闭抽屉
  // 方式一：使用 useEffect 监听 isMobile 变化
  useEffect(() => {
    if (!isMobile && isDrawerOpen) {
      onDrawerClose();
    }
  }, [isMobile, isDrawerOpen]);

  // 布局样式
  const headerStyle = {
    with: '100%',
    height: 63,
    padding: '0 40px',
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    borderBottom: '3px solid #f3f3f3',
  };
  const contentStyle = {
    backgroundColor: '#ffffff',
  };

  const footerStyle = {
    height: 200,
    padding: '0 40px',
    backgroundColor: '#17171c',
  };
  // 汉堡组件点击事件

  return (
    <Layout id='app'>
      {/* 头部 */}
      <Header className='header_father ' style={headerStyle}>
        <Row wrap={false} className=' h-full  flex justify-between items-center'>
          {/* logo区域 */}
          <Col flex="100px">
            <Logo />
          </Col>
          {/* 菜单栏区域 */}
          <Col flex="auto">
            <div className='hidden md:block h-full justify-center items-center '>
              <Meun />
            </div>
          </Col>
          {/* 右侧按钮与汉堡组件 */}
          <Col className='drawer'>
            <div className='hidden md:block'>
              <Button color="default" variant="solid">
                联系我们
              </Button>
            </div>
            <div className='block md:hidden drawer'>
              <Button className='Hamburg' onClick={showDrawer} color="default" variant="solid">
                <Hamburg />
              </Button>
            </div>
          </Col>
        </Row>
      </Header>

      <MobileDrawer open={isDrawerOpen} onClose={onDrawerClose} />

      {/* 内容 */}
      <Content className='content' style={contentStyle}>Content</Content>
      {/* 尾部 */}
      <Footer style={footerStyle}>123</Footer>
    </Layout >
  )
}

export default App
