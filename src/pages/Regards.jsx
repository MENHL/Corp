import './style/abouts.scss'
// 引入团队成员图片
import zhansan from '../assets/zhangsan.png'
import lisi from '../assets/lisi.png'
import wangwu from '../assets/wangwu.png'
import zhaoliu from '../assets/zhaoliu.png'

// ==================== 静态数据 ====================

/**
 * 发展历程数据
 * @property {string} year   - 年份
 * @property {string} title  - 标题
 * @property {string} desc   - 描述内容
 */
const milestones = [
    {
        id: 1,
        year: '2020',
        title: '公司成立',
        desc: '三位创始人于北京创立 Corp，确定「技术服务企业」的核心定位。'
    },
    {
        id: 2,
        year: '2021',
        title: '完成天使轮融资',
        desc: '获得知名机构天使轮投资，团队扩充至20人，发布首个数据智能产品。'
    },
    {
        year: '2023',
        title: '全国化布局',
        desc: '设立上海、深圳分公司，服务客户突破100家，团队规模超过80人。'
    },
    {
        id: 3,
        year: '2025',
        title: '智能化升级',
        desc: '发布NovaAI智能平台，企业客户超过200家，开启AI驱动的新篇章。'
    }
];

/**
 * 核心团队数据
 * @property {string} name     - 姓名
 * @property {string} position - 职位
 * @property {string} avatar   - 头像图片（import 导入的图片）
 */
const team_members = [
    { id: 1, name: '张三', position: '创始人 & CEO', avatar: zhansan },
    { id: 2, name: '李四', position: '联合创始人 & CTO', avatar: lisi },
    { id: 3, name: '王五', position: '设计副总裁', avatar: wangwu },
    { id: 4, name: '赵六', position: '交付负责人', avatar: zhaoliu }
];

// ==================== 组件 ====================

function Bout() {
    return (
        <div id='about' className='clone banner f'>
            {/* 顶部标题区 */}
            <div id='about_title' className='m'>
                <h1 className='l_title'>关于Corp</h1>
                <p className='s_title'>
                    我们由来自一线科技公司的工程师、设计师和产品专家组成，累计服务超过200家企业客户，覆盖金融、医疗、教育、零售等行业。
                </p>
            </div>

            <div id='about_content'>
                {/* ===== 发展历程 ===== */}
                <div id='develop'>
                    <div className='develop_title'>
                        <h1 className='l_title'>发展历程</h1>
                        <p className='s_title'>五年，从三个人到值得信赖的企业级服务商</p>
                    </div>
                    <ul className='develop_box'>
                        {milestones.map((item, id) => (
                            <li className='d-list' key={id}>
                                <h1 className='year'>{item.year}</h1>
                                <h2 className='d_title'>{item.title}</h2>
                                <p className='s_title'>{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ===== 核心团队 ===== */}
                <div id='team'>
                    <div className='team-title'>
                        <h1 className='l_title'>核心团队</h1>
                        <p className='s_title'>来自一线科技公司的工程师、设计师与产品专家</p>
                    </div>
                    <div className='team_box'>
                        {team_members.map((member, id) => (
                            <ul className='box' key={id}>
                                <li>
                                    <img className='team_img' src={member.avatar} alt={member.name} />
                                </li>
                                <li className='compellation'>{member.name}</li>
                                <li className='position'>{member.position}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bout