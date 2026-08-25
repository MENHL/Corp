import './style/h_Hom.scss'
// 模拟后端发送的 homeData.json 数据文件
import homeData from '../../../public/data/homeData.json'

    function Homs() {
        const { hero } = homeData;
        return (
            <>
                <div className="text">{hero.text}</div>
                <div className="title">{hero.title}</div>
                <div className="introduce">{hero.introduce}</div>
                <div className="btn">
                    {hero.buttons.map((btn) => (
                        <div key={btn.id} className={btn.type === 'primary' ? 'realize' : 'subscribe'}>
                            {btn.label}
                        </div>
                    ))}
                </div>
            </>
        )
    }

export default Homs