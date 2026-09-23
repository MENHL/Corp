import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import App from '../layout/App';               // 根布局组件
// 懒加载
// import { lazy } from 'react';
import Home from '../pages/Home';              // 首页  
import Product from '../pages/Product'         // 产品
import Case from '../pages/Case'               // 案例
import Regards from '../pages/Regards'
import Journalism from '../pages/Journalism'   // 新闻
// 联系我们
const Contact = lazy(() => import('../components/Contact'));
// 预约演示
const DemonStration = lazy(() => import('../components/DemonStration'));
// 案例里面的路由

const CaseCategorys = lazy(() => import('../components/CaseCategory'));

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                name: "home",
                element: <Navigate to="/home" replace />
            },
            {
                path: "/home",
                name: "home",
                Component: Home
            },
            /* —————————————————————————————————————————————— */
            // 联系我们 组件
            {
                path: "/contact",
                name: "contact",
                element: <Contact />
            },
            // 预约演示
            {
                path: "/demonStration",
                name: "demonStration",
                element: <DemonStration />
            },
            /* ________________________________________ */
            {
                path: "/product",
                name: "product",
                Component: Product
            },
            {
                path: "/case",
                name: "case",
                Component: Case,
                children: [
                   { path: ":category", element: <CaseCategorys /> }
                   
                ]
            },
            {
                path: "/regards",
                name: "regards",
                Component: Regards
            },
            {
                path: "/journalism",
                name: "journalism",
                Component: Journalism
            },
        ],
    },
], {
    basename: import.meta.env.BASE_URL // 自动读取 vite.config.js 里的 base 值
});

export default router;