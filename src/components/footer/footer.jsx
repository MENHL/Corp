import './footer.scss';
import Logo from '../Home/Logo';
import { WechatFilled, GithubFilled, SunFilled } from '@ant-design/icons';

// ============= 数据提取 =============
const footerData = {
    // 产品列表
    products: ['技术咨询', '产品开发', '数据智能'],
    // 公司列表
    company: ['关于我们', '加入我们', '新闻动态'],
    // 资源列表
    resources: ['技术博客', '开发文档', '客户案例'],
    // 联系方式
    contact: {
        phone: '111-2222-3333',
        email: 'hello@Corp.com',
        address: 'xx市xx区xx园',
    },
};

// ============= 组件 =============
function f_Footer() {
    const { products, company, resources, contact } = footerData;

    return (
        <div className="footer-box">
            {/* 左侧品牌信息 */}
            <div className="product-grid">
                <div className="logo">
                    <Logo />
                </div>

                <div className="title">
                    用技术驱动业务
                </div>
                <div className="introduce">
                    为企业提供全栈技术解决方案
                </div>
                <div className="icon">
                    <WechatFilled />
                    <SunFilled />
                    <GithubFilled />
                </div>
            </div>
            <h1 className='h'></h1>
            {/* 产品、公司、资源 三列 */}
            <ul className="company-grid">
                <ul className="product_list">
                    <li className="title">产品</li>
                    {products.map((item, index) => (
                        <li key={index} className="grid">{item}</li>
                    ))}
                </ul>
                <ul className="product_list">
                    <li className="title">公司</li>
                    {company.map((item, index) => (
                        <li key={index} className="grid">{item}</li>
                    ))}
                </ul>
                <ul className="product_list">
                    <li className="title">资源</li>
                    {resources.map((item, index) => (
                        <li key={index} className="grid">{item}</li>
                    ))}
                </ul>
            </ul>

            {/* 联系我们 */}
            <ul className="relation_grid">

                <li className="title">联系我们</li>
                <li className="grid">电话：{contact.phone}</li>
                <li className="grid">邮箱：{contact.email}</li>
                <li className="grid">地址：{contact.address}</li>
            </ul>
        </div>
    );
}

export default f_Footer;