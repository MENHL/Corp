import './style/medical.scss'
import Alls from '../data/caseData.json'   // 导入整个对象

function c_Alls() {
    // 取全部数据数组（也可替换为 Alls.financial 等）
    const data = Alls.alls

    return (
        <>
            {data.map((item) => (
                // 注意：不同分类的 id 可能重复（都有 1~4），建议使用 index 或组合键
                <li key={`${item.category}-${item.id}`} className="item">
                    <div className="case-img">
                        <img src={item.src} alt={item.category} />
                    </div>
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

export default c_Alls