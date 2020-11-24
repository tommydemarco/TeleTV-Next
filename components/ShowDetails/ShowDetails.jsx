import parse from 'html-react-parser'
//========> COMPONENTS 
import CastMember from '../../components/Castmember/CastMember'
//========> CSS
import styles from './ShowDetails.module.scss'

const ShowDetails = ({ show }) => {

    const { name, language, genres, summary, image, _embedded } = show

    const renderCast = () => {
        return _embedded.cast.map(castMember => {
            return (
                castMember.person.image &&
                <CastMember key={castMember.person.id} castMember={castMember.person} />
            )
        })
    }

    return (
        <>
        <article className={styles.show}>
            <div className={styles.show__img_container}>
                <div className={styles.show__img_constrainer}>
                    <img 
                        className={styles.show__img} 
                        alt={`image for the show ${name}`}
                        src={image.original && image.original}
                    />
                </div>
            </div>
            <div className={styles.show__content}>
                <h1>{name}</h1>
                <h3>Language: <i>{language}</i></h3>
                {
                genres.length > 0 &&
                <ul className={styles.show__genere_list}>
                    {genres.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                }
                <h4>Summary</h4>
                {parse(summary)}
            </div>
        </article>

        {
            _embedded.cast.length > 0 ? 
            <div className={styles.cast}>
                <h2>Show Cast</h2>
                <div className="cast-container">
                    {renderCast()}
                </div>
            </div>
            : null
        }

        <style jsx>
            {`
            .cast-container {
                display:flex;
                flex-wrap:wrap;
                justify-content:flex-start;
            }
            `}
        </style>

        
        
        </>
    )
}

export default ShowDetails
