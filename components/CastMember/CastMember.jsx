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
            <div className={styles.actor__content}>
                <h5 className={styles.actor__name}>{castMember.name}</h5>
            </div>
            
        </div>
    )
}

export default CastMember
