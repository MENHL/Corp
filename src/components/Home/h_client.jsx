import './style/h_client.scss'
import homeData from '../../../public/data/homeData.json'


function h_client() {
    const { client } = homeData;
    return (
        <>
            <div className="l_title">{client.title}</div>
            <div className="s_title">{client.subtitle}</div>
        </>
    )
}

export default h_client