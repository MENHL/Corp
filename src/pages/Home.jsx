// 引入样式
import './style/home.scss'
// 引入图标
// 模拟后端发送的 homeData.json 数据文件
// 引入组件
import Homs from '../components/Home/h_Hom'
import Server from '../components/Home/h_Server'
import Client from '../components/Home/h_client'
import Team from '../components/Home/h_Team'

function Home() {
    return (
        <div id="home">
            {/* 顶部区域 */}
            <section className="home_list banner">
                <Homs />
            </section>
            {/* 我们的服务与工作方式*/}
            <div className='s_r banner'>
                <Server />
            </div>
            {/*客户信赖的理由*/}
            <div className='clients banner'>
                <Client />
            </div>
            <div className='team banner'>
                <Team />
            </div>
        </div >
    );
}
export default Home