import { useState, useEffect, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation, Link } from 'react-router-dom';
import './App.css';
import Logo from '../components/Home/Logo';
import Meun from '../components/Home/Meun';
import Footers from '../components/footer/footer';
import Hamburg from '../components/mobile/Hamburg';
import MobileDrawer from '../components/mobile/Drawer';
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
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      const contentEl = document.querySelector('.content');
      if (contentEl) {
        contentEl.scrollTop = 0;
        contentEl.scrollLeft = 0;
      }

      const layoutContent = document.querySelector('.ant-layout-content');
      if (layoutContent) {
        layoutContent.scrollTop = 0;
        layoutContent.scrollLeft = 0;
      }

      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.scrollTop = 0;
        mainEl.scrollLeft = 0;
      }

      document.documentElement.scrollTop = 0;
      document.documentElement.scrollLeft = 0;
      document.body.scrollTop = 0;
      document.body.scrollLeft = 0;
    });

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname]);

  // ========== 【新增】强制隐藏所有滚动条（终极方案） ==========
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.id = 'force-hide-scrollbars';
    style.innerHTML = `
      /* Chrome / Edge / Safari */
      *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
        background: transparent !important;
      }
      /* Firefox */
      * {
        scrollbar-width: none !important;
      }
      /* IE / Edge 旧版 */
      * {
        -ms-overflow-style: none !important;
      }
      /* 对项目中可能产生滚动的容器再次加强 */
      .ant-layout-content::-webkit-scrollbar,
      .ant-layout::-webkit-scrollbar,
      #app::-webkit-scrollbar,
      .content::-webkit-scrollbar,
      .case-box::-webkit-scrollbar {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById('force-hide-scrollbars');
      if (el) el.remove();
    };
  }, []);

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
    flex: '0 0 auto',
  };

  return (
    <Layout id="app" style={{ minHeight: '100vh' }}>
      <Header className="header" style={Headerstyle}>
        <Row
          wrap={false}
          className="banner f h-full flex justify-between items-center"
        >
          <Col flex="100px">
            <Logo />
          </Col>
          <Col flex="auto">
            <div className="hidden md:block h-full justify-center items-center">
              <Meun />
            </div>
          </Col>
          <Col className="drawer">
            <div className="hidden md:block">
              <Link to="/contact">
                <Button color="default" variant="solid">
                  联系我们
                </Button>
              </Link>
            </div>
            <div className="block md:hidden drawer">
              <Button
                className="Hamburg"
                onClick={showDrawer}
                color="default"
                variant="solid"
              >
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
      <Footer className="footer">
        <div className="banner f">
          <Footers />
        </div>
      </Footer>
    </Layout>
  );
}

export default App;