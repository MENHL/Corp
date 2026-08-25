import './style/h_Exhibition.scss';
import data from '../../../public/data/homeData.json';

function h_Exhibition() {
    const { title, list } = data.partner;

    return (
        <>
            <div className="partner">{title}</div>
            <ul className="cooperative">
                {list.map((item, index) => (
                    <li key={index} className="item">
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default h_Exhibition;