<div style="text-align:center;">
  <img src="public/favicon.svg" width="80" alt="React Corp Logo"/>  
 </div>
# React  Corp · 企业官网（B2B）

**基于 React 19 + Vite 8 构建的响应式 B2B 企业门户**
[预览演示](https://your-domain.com) · [Gitee 仓库](https://gitee.com/rainbow-under-the-sunshine/react_corp) · [GitHub 仓库](https://github.com/your-username/react-novacorp)

![React](https://img.shields.io/badge/React-19-61dafb?logo=react\&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite\&logoColor=white)

![Ant Design](https://img.shields.io/badge/Ant_Design-6-1677ff?logo=antdesign\&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss\&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-7-ca4245?logo=reactrouter\&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green.svg)

![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
---

## 📖 项目简介

**React Corp** 是一个基于 **React 19 + Vite 8** 构建的响应式 B2B 企业官网，面向企业客户展示公司形象、产品服务、解决方案与客户案例，并提供新闻动态、地图位置与在线联系等能力，帮助企业建立专业、可信的线上门户。

## 🔗 线上地址与代码仓库

- **Gitee 仓库**：<https://gitee.com/rainbow-under-the-sunshine/react_corp>
- **GitHub 仓库**：<https://github.com/MENHL/React_Corp)>

## 🛠 技术栈

### 核心依赖

| 依赖                                                                                 | 版本              | 说明                |
| ---------------------------------------------------------------------------------- | --------------- | ----------------- |
| [React](https://react.dev/)                                                        | ^19.2.8         | 用户界面构建库           |
| [React DOM](https://react.dev/)                                                    | ^19.2.8         | React 的 DOM 渲染器   |
| [React Router DOM](https://reactrouter.com/)                                       | ^7.18.2         | 前端路由（SPA 多页面导航）   |
| [Ant Design](https://ant.design/index-cn)                                          | ^6.6.1          | 企业级 UI 组件库        |
| [@ant-design/icons](https://ant.design/components/icon-cn)                         | ^6.3.2          | Ant Design 图标库    |
| [axios](https://axios-http.com/zh/)                                                | ^1.20.0         | HTTP 请求库（对接后端接口）  |
| [Leaflet](https://leafletjs.com/) / [React-Leaflet](https://react-leaflet.js.org/) | ^1.9.4 / ^5.0.0 | 轻量级开源地图（位置展示）     |
| [dayjs](https://day.js.org/zh-CN/)                                                 | ^1.11.23        | 轻量日期处理库           |
| [react-responsive](https://github.com/yocontra/react-responsive)                   | ^10.0.1         | 响应式布局（PC / 移动端适配） |
| [Sass](https://sass-lang.com/)                                                     | ^1.103.1        | CSS 预处理器          |

### 开发依赖

| 依赖                                                                  | 版本      | 说明                              |
| ------------------------------------------------------------------- | ------- | ------------------------------- |
| [Vite](https://cn.vitejs.dev/)                                      | ^8.2.0  | 下一代前端构建工具                       |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | ^6.0.4  | Vite React 插件（Fast Refresh）     |
| [Tailwind CSS](https://tailwindcss.com/)                            | ^4.3.3  | 原子化 CSS 框架（`@tailwindcss/vite`） |
| [ESLint](https://eslint.org/)                                       | ^10.8.0 | 代码规范检查                          |
| eslint-plugin-react-hooks                                           | ^7.1.1  | Hooks 规则检查                      |
| eslint-plugin-react-refresh                                         | ^0.5.3  | 组件热更新规范检查                       |
| @types/react / @types/react-dom                                     | ^19.x   | TypeScript 类型定义                 |

## ✨ 功能特性

作为典型的 B2B 企业官网，本项目包含以下常见模块（具体功能以项目实际为准）：

- 🏠 **企业首页**：品牌形象展示、团队介绍、合作伙伴/客户墙、核心服务概览
- 📦 **产品与服务**：企业产品、服务能力与解决方案展示
- 💼 **客户案例**：按行业分类的案例展示（如医疗、金融、教育、零售等）
- 📰 **新闻动态**：企业资讯、行业动态发布与展示
- 👥 **关于我们**：公司介绍、企业文化、团队风采
- 📍 **地图位置**：基于 Leaflet 的公司位置地图展示
- ✉️ **在线联系**：联系方式、在线咨询/预约演示表单
- 📱 **响应式适配**：基于 react-responsive 的 PC / 移动端双端适配（移动端抽屉菜单）
- 🧭 **单页应用路由**：基于 React Router 的页面跳转与布局复用

## 🚀 安装与运行

### 环境要求

- **Node.js** ≥ 18（推荐 20 LTS 及以上）
- **npm** ≥ 9（或使用 pnpm / yarn 等包管理器）

### 安装依赖

```bash
# 克隆项目（Gitee）
git clone https://gitee.com/rainbow-under-the-sunshine/react_corp.git
cd react_corp

# 或从 GitHub 克隆（请替换为实际仓库地址）
# git clone https://github.com/your-username/react-novacorp.git

# 安装依赖
npm install
```

### 本地开发

```bash
# 启动开发服务器（默认 http://localhost:5173）
npm run dev
```

### 构建与预览

```bash
# 生产环境构建，输出至 dist/
npm run build

# 本地预览生产构建产物
npm run preview
```

## 📜 可用脚本说明

在项目根目录执行以下命令：

| 命令                | 说明                                       |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | 启动 Vite 开发服务器，支持热更新（HMR），用于本地开发调试        |
| `npm run build`   | 执行生产环境构建，打包压缩后输出到 `dist/` 目录，可直接部署至静态服务器 |
| `npm run lint`    | 运行 ESLint 对项目代码进行规范检查                    |
| `npm run preview` | 启动本地静态服务器预览 `dist/` 构建产物，验证生产构建效果        |

## 📁 项目结构

典型的 Vite + React 项目目录结构：

```tree
react-novacorp/
├── dist/                        # 构建产物（生产环境输出）
├── public/                      # 静态资源（不参与构建处理，原样拷贝）
├── src/
│   ├── api/                     # 接口请求封装（axios）
│   │   └── map.js               # 地图相关接口请求
│   ├── assets/                  # 图片、SVG 图标等静态资源
│   ├── components/              # 通用/业务组件
│   │   ├── Home/                # 首页区块组件（团队、客户墙、服务、菜单、Logo）
│   │   │   └── style/           # 首页区块组件样式（SCSS）
│   │   ├── mobile/              # 移动端组件（抽屉菜单 Drawer、汉堡按钮）
│   │   ├── footer/              # 页脚组件
│   │   ├── c_*.jsx              # 客户案例分类组件（全部/医疗/金融/教育/零售）
│   │   ├── map.jsx              # Leaflet 地图组件
│   │   ├── Contact.jsx          # 联系我们组件
│   │   ├── DemonStration.jsx    # 产品演示预约组件
│   │   └── style/               # 通用组件样式（SCSS）
│   ├── data/                    # 本地数据（homeData / caseData / journalismData.json）
│   ├── layout/                  # 页面布局
│   │   └── App.jsx              # 应用根组件（路由出口 + 全局布局）
│   ├── pages/                   # 页面级组件
│   │   ├── Home.jsx             # 首页
│   │   ├── Product.jsx          # 产品与服务
│   │   ├── Case.jsx             # 客户案例
│   │   ├── Journalism.jsx       # 新闻动态
│   │   ├── Regards.jsx          # 关于我们
│   │   └── style/               # 页面样式（SCSS）
│   ├── routers/                 # 路由配置
│   │   └── index.jsx            # 路由表定义
│   ├── style/                   # 全局样式（index.css、antdesign.scss 主题覆盖）
│   ├── utils/                   # 工具函数
│   └── main.jsx                 # 应用入口（挂载 React 根节点）
├── eslint.config.js             # ESLint 配置
├── tailwind.config.js           # Tailwind CSS 配置
├── vite.config.js               # Vite 配置（含 React / Tailwind 插件）
├── index.html                   # HTML 模板入口
└── package.json                 # 项目依赖与脚本配置
```

## 🤝 贡献指南

欢迎参与项目共建！

1. 发起 Pull Request 并描述清楚改动内容（Gitee / GitHub 均可）

如发现 Bug 或有功能建议，请提交 Issue：

- Gitee：<https://gitee.com/rainbow-under-the-sunshine/react_corp/issues>
- GitHub：<https://github.com/your-username/react-novacorp/issues>（占位链接，请替换为实际仓库地址）

## 📄 许可证

本项目基于 [MIT License](./LICENSE) 开源。

---

© 2026 React NovaCorp. All Rights Reserved.
