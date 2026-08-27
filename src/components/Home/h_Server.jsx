import './style/h_server.scss';
import homeData from '../../../public/data/homeData.json';
import {
    AliwangwangOutlined,
    CodeOutlined,
    OpenAIOutlined,
    EyeOutlined,
    LayoutOutlined,
    ForkOutlined,
} from '@ant-design/icons';

// 图标映射表
const iconMap = {
    AliwangwangOutlined,
    CodeOutlined,
    OpenAIOutlined,
    EyeOutlined,
    LayoutOutlined,
    ForkOutlined,
};

function HServer() {
    // 直接从导入的数据中获取 services 数组
    const services = homeData?.services || [];

    return (
        <>
            {services.map((item) => {
                // 兼容两种字段命名：server 用 title/subtitle，reason 用 titles/subtitles
                const titleText = item.title || item.titles || '服务标题';
                const subText = item.subtitle || item.subtitles || '服务副标题';

                // 根据 name 设置不同的 className
                const blockClass = item.name === 'server' ? 'server' : 'reason';

                return (
                    <div className={blockClass} key={item.id}>
                        <div className="l_title">{titleText}</div>
                        <div className="s_title">{subText}</div>
                        <ul className="s-r-box">
                            {item.list?.map((listItem) => {
                                const Icon = iconMap[listItem.icon];
                                return (
                                    <li className="s-r_item" key={listItem.id}>
                                        <div className="li_list ">
                                            <div className="bg-li li_icon">
                                                {Icon && <Icon />}
                                            </div>

                                        </div>
                                        <div className="li_list li_title">{listItem.title}</div>
                                        <div className="li_list li_text">{listItem.description}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </>
    );
}

export default HServer;