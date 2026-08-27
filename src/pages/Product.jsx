import './style/product.scss';
// 引入图标
import {
    CommentOutlined,
    LayoutOutlined,
    LineChartOutlined,
    CloudOutlined,
    SafetyCertificateOutlined,
    NodeIndexOutlined
} from '@ant-design/icons';

// ---------- 提取的数据 ----------
// 页面标题数据
const pageData = {
    mainTitle: '产品与服务',
    subTitle: '从战略咨询到智能平台，提供覆盖企业全生命周期的技术产品矩阵'
};

// 产品列表数据（每个产品包含图标组件、标题和描述）
const productList = [
    {
        id: 1,
        icon: <CommentOutlined />,
        title: '技术咨询',
        description: '为企业提供从架构设计到技术选型的全流程咨询服务，助力数字化转型。'
    },
    {
        id: 2,
        icon: <LayoutOutlined />,
        title: '产品开发',
        description: '从需求分析到产品上线，提供端到端的软件开发与交付服务，确保高质量交付。'
    },
    {
        id: 3,
        icon: <LineChartOutlined />,
        title: '数据智能',
        description: '基于大数据与AI技术，构建智能分析平台，让数据驱动业务决策与增长。'
    },
    {
        id: 4,
        icon: <CloudOutlined />,
        title: '云基础设施',
        description: '高可用、可弹性伸缩的云原生架构设计与运维，支撑业务平稳增长。'
    },
    {
        id: 5,
        icon: <SafetyCertificateOutlined />,
        title: '安全合规',
        description: '覆盖数据安全、等保合规、隐私计算的完整安全解决方案，护航企业数据资产。'
    },
    {
        id: 6,
        icon: <NodeIndexOutlined />,
        title: 'API开放平台',
        description: '统一的企业级API网关与管理平台，让系统能力开放互联、快速集成。'
    }
];
// ---------- 数据提取结束 ----------

function Product() {
    return (
        <div className="product banner f">
            {/* 大标题 */}
            <div className="product_title">
                <h1 className="l_title L">{pageData.mainTitle}</h1>
                <h2 className="s_title">{pageData.subTitle}</h2>
            </div>
            <ul className="product_content">
                {productList.map((item) => (
                    <li className="product_item" key={item.id}>
                        <div className="p-list">
                            <div className="bg-icon icon">{item.icon}</div>
                        </div>
                        <div className="p-list title">{item.title}</div>
                        <div className="p-list subhead">{item.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product;