import { useParams, Navigate } from 'react-router-dom';
import './style/Casecategory.scss';
import caseData from '../data/caseData.json';

const categoryMap = {
    alls: caseData.alls,
    finance: caseData.financial,
    medical: caseData.medical,
    education: caseData.education,
    retail: caseData.retail
};

function CaseCategory() {
    const { category } = useParams();
    const data = categoryMap[category];

    if (!data) {
        return <Navigate to="/case/alls" replace />;
    }

    return (
        <>
            {data.map((item) => (
                <li key={`${item.category}-${item.id}`} className="item">
                    <div className="case-img">
                        <img
                            /* 👇 这里做了容错处理：如果 item.src 开头有 / 会自动去掉 */
                             src={`${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`}
                            alt={item.category}
                        />
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
    );
}

export default CaseCategory;