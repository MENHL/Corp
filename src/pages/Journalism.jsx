import './style/journalism.scss'
import { Collapse } from 'antd';
import journalismData from '../../public/data/journalismData.json'
import { useState } from 'react';
function Journalism() {
    const [expandIconPlacement] = useState('end');

    // 将 JSON 数据转换为 Collapse 需要的 items 格式
    const items = journalismData.newsList.map(item => ({
        key: item.key,
        label: item.label,
        children: (
            <div className='Collapse_box'>
                <div className='Collapse-img'>
                    <img className='img' src={item.image} alt={item.title} />
                </div>
                <div className='Collapse-title'>
                    <div className='time-box'>
                        <p className='time-title'>{item.tag}</p>
                    </div>
                    <p className='l_title L'>{item.date} {item.title}</p>
                    <p className='s_title S'>{item.description}</p>
                    <div className='more'>{item.date} · 阅读全文 →</div>
                </div>
            </div>
        ),
    }));
    return (
        <div id='journalism' className="clone banner f">
            <div className="product_title m">
                <h1 className="l_title">新闻动态</h1>
                <p className="s_title">公司动态、产品发布与行业洞察，第一时间与你分享</p>
            </div>
            <div className='Collapse_list'>
                <Collapse
                    size="large"
                    defaultActiveKey={['1']}
                    expandIconPlacement={expandIconPlacement}
                    accordion
                    items={items}
                />
            </div>
        </div>
    )
}

export default Journalism