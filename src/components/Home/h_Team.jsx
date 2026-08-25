import './style/h_Team.scss';
import teamData from '../../../public/data/homeData.json'; 

function Team() {
    // 从 teamData 中解构出 team 和 gallery
    const { team, gallery } = teamData;
    const { title, descriptions, stats } = team;
    const { images } = gallery;

    return (
        <>
            <section className="team_item">
                <div className="title">{title}</div>

                <ul className="team_list">
                    {descriptions.map((text, index) => (
                        <li
                            key={index}
                            className={`describe ${index === 0 ? 'describe_li' : ''}`}
                        >
                            {text}
                        </li>
                    ))}
                </ul>

                <ul className="time">
                    {stats.map((stat, index) => (
                        <li key={index} className="times">
                            <div className="client">{stat.value}</div>
                            <div className="Two">{stat.label}</div>
                        </li>
                    ))}
                </ul>
            </section>

            <ul className="team_img">
                {images.map((image) => (
                    <li key={image.id} className="images">
                        <img src={image.src} alt={image.alt} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Team;