import './style/medical.scss'
import Retail from '../data/caseData.json'

function c_Retail() {
    const data = Retail.retail
    return (
        <>
            {data.map((item) => (
                <li key={item.id} className="item">
                    {/* 图片 */}
                    <div className="case-img">
                        <img src={item.src} alt={item.category} />
                    </div>
                    {/* 标题 */}
                    <ul className="case-title">
                        <li className="li li-box">{item.category}</li>
                        <li className="li li-name">{item.name}</li>
                        <li className="li li-assistant">{item.description}</li>
                        <li className="li">
                            <span className="emphasis">{item.stat}</span> {item.year}
                        </li>
                    </ul>
                </li>
            ))}
        </>
    )
}

export default c_Retail