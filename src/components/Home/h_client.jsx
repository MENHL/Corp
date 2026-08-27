import './style/h_client.scss'
// 引入模拟数据
import homedata from '../../../public/data/homeData.json'


function h_client() {
    const { client } = homedata;
    return (
        <>
            <div className="l_title">{client.title}</div>
            <div className="s_title">{client.subtitle}</div>
            <ul className='argument'>
                {client.list.map((item) => (
                    <li key={item.id} className='item'>
                        <div className='title'>{item.title}</div>
                        <div className='introduce'>{item.description}</div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default h_client