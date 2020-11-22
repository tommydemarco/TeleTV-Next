//========> CSS
import styles from './ShowDetails.module.scss'

const ShowDetails = ({ show }) => {
    const { name, language, genres, summary, image, _embedded } = show
    return (
        <article className={styles.show}>
            <div className={styles.show__img_container}>
                <img 
                    className={styles.show__img} 
                    alt={`image for the show ${name}`}
                    src={image.original && image.original}
                />
            </div>
            <div className={styles.show__content}>
                <div className={styles.show__content_first}>
                    <h1>{name}</h1>
                    <h3><i>{language}</i></h3>
                    <ul className={styles.show__genere_list}>
                        {genres.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.show__content_second}>
                    <h3>Summary</h3>
                    <p>{summary}</p>
                </div>
            </div>
            <div className={styles.show__cast}>
                <h2>Show Cast</h2>
                {_embedded.cast.map(castMember => (
                    <div className={styles.actor}>
                        <div className={styles.actor__img_container}>
                            <img 
                                className={styles.actor__img}
                                alt={`Photo of ${castMember.name}`}
                                src={}
                            />
                        </div>
                        <h5>{castMember.name}</h5>
                        <h6>Birthday: {castMember.birthday}</h6>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default ShowDetails
