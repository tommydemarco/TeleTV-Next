//=========> CSS
import styles from './CastMember.module.scss'

const CastMember = ({ castMember }) => {

    return (
        <div className={styles.actor}>
            <div className={styles.actor__img_container}>
                <img 
                    className={styles.actor__img}
                    alt={`Photo of ${castMember.name}`}
                    src={castMember.image.medium}
                />
            </div>
            <h5>{castMember.name}</h5>
        </div>
    )
}

export default CastMember
