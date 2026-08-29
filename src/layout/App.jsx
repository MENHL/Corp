import { useState, useEffect, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation, Link } from 'react-router-dom';
import './App.css'
import Logo from '../components/Home/Logo'
import Meun from '../components/Home/Meun'
import Footers from '../components/footer/footer'
import Hamburg from '../components/mobile/Hamburg'
import MobileDrawer from '../components/mobile/Drawer'
import { Layout, Row, Col, Button } from 'antd';

function App() {
  const { Header, Footer, Content } = Layout;
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const showDrawer = () => {
    if (isMobile) {
      setIsDrawerOpen(true);
    }
  };

  const onDrawerClose = () => setIsDrawerOpen(false);

  useEffect(() => {
    if (!isMobile && isDrawerOpen) {
      onDrawerClose();
    }
  }, [isMobile, isDrawerOpen]);

  // ========== 滚动到顶部（适配所有容器） ==========
  useLayoutEffect(() => {
    // 使用 requestAnimationFrame 确保在浏览器下一帧绘制前执行
    const rafId = requestAnimationFrame(() => {
      // 1. 滚动 window
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      // 2. 滚动 .content 容器（如果有内部滚动）
      const contentEl = document.querySelector('.content');
      if (contentEl) {
        contentEl.scrollTop = 0;
        contentEl.scrollLeft = 0;
      }

      // 3. 滚动 antd 的 Layout Content
      const layoutContent = document.querySelector('.ant-layout-content');
      if (layoutContent) {
        layoutContent.scrollTop = 0;
        layoutContent.scrollLeft = 0;
      }

      // 4. 滚动其他可能的主容器
      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.scrollTop = 0;
        mainEl.scrollLeft = 0;
      }

      // 5. 强制重置 html/body 滚动（防止某些浏览器兼容问题）
      document.documentElement.scrollTop = 0;
      document.documentElement.scrollLeft = 0;
      document.body.scrollTop = 0;
      document.body.scrollLeft = 0;
    });

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname]);

  const Headerstyle = {
    height: '65px',
    padding: '0 30px',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    borderBottom: '3px solid #f3f3f3',
    backgroundColor: '#ffffff',
  };

  const Contentstyle = {
    flex: '0 0 auto',   // 新增：禁止伸缩，高度由内容撑开
  };

  return (
    <Layout id='app' style={{ minHeight: '100vh' }}>
      <Header className='header' style={Headerstyle}>
        <Row wrap={false} className='banner f h-full flex justify-between items-center'>
          <Col flex="100px">
            <Logo />
          </Col>
          <Col flex="auto">
            <div className='hidden md:block h-full justify-center items-center'>
              <Meun />
            </div>
          </Col>
          <Col className='drawer'>
            <div className='hidden md:block'>
              <Link to="/contact">
                <Button color="default" variant="solid">
                  联系我们
                </Button>
              </Link>
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
      <Content style={Contentstyle}>
        <Outlet />
      </Content>
      <Footer className='footer'>
        <div className='banner f'>
          <Footers />
        </div>
      </Footer>
    </Layout>
  );
}

export default App;