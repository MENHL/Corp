import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// 引入路由
import { Outlet } from 'react-router-dom';
import './App.css'
// PC端组件
import Logo from '../components/Home/Logo'
import Meun from '../components/Home/Meun'
//* 移动端组件 */
import Hamburg from '../components/mobile/Hamburg'
import MobileDrawer from '../components/mobile/Drawer'
// 引入antd组件
import { Layout, Row, Col, Button } from 'antd';

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

  const Headerstyle = {
    height: '65px',
    padding: ' 0 30px',
    position: 'sticky',
    top: 0,
    borderBottom: '3px solid #f3f3f3',
    backgroundColor: ' #ffffff',

  }
  const Contentstyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
  const Footerstyle = {

  }

  // 汉堡组件点击事件

  return (
    <Layout id='app' style={{ minHeight: '100vh' }}>
      {/* 头部 */}
      <Header className='header ' style={Headerstyle}>
        <Row wrap={false} className='banner h-full  flex justify-between items-center' >
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
      {/* 移动端的抽屉组件 */}
      <MobileDrawer open={isDrawerOpen} onClose={onDrawerClose} />

      {/* 内容 */}
      <Content className='content' style={Contentstyle}>
        <Outlet />
      </Content>
      {/* 尾部 */}
      <Footer className='footer' style={Footerstyle}>
        1231213
      </Footer>
    </Layout >
  )
}

export default App
