// 引入样式
import './style/home.scss'
// 引入图标
// 模拟后端发送的 homeData.json 数据文件
// 引入组件
import Homs from '../components/Home/h_Hom'
import Server from '../components/Home/h_Server'
import Exhibition from '../components/Home/h_Exhibition'
import Team from '../components/Home/h_Team'


function Home() {
    return (
        <div id="home">
            {/* 顶部区域 */}
            <section className="home_list banner">
                <Homs />
            </section>
            {/* 服务区域 */}
            <div className="serve banner" >
                <Server />
            </div>
            {/*值得信赖的伙伴*/}
            <div className='exhibition '>
                <Exhibition />
            </div>
            <div className='team banner'>
                <Team />
            </div>
        </div >
    );
}
export default Home