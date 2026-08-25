import './style/h_Server.scss'
// 引入data/json数据文件
import homeData from '../../../public/data/homeData.json'
// 引入ICON图标
import { RadarChartOutlined, LayoutOutlined, LineChartOutlined } from '@ant-design/icons';

const iconMap = {
    RadarChartOutlined,
    LayoutOutlined,
    LineChartOutlined,
};
function h_Server() {
    const { services } = homeData;
    return (
        <>
            <div className="serve-title">{services.title}</div>
            <div className="server_text">{services.subtitle}</div>
            <ul className="server-box">
                {services.list.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                        <li className="server_item" key={item.id}>
                            <div className="li_list li_icon">
                                {Icon && <Icon />}
                            </div>
                            <div className="li_list li_title">{item.title}</div>
                            <div className="li_list li_text">{item.description}</div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default h_Server