import Link from 'next/link'
//========> CSS
import styles from './ShowThumbnail.module.scss'

const ShowThumbnail = ({show}) => {
    const { name, image, id, type} = show
    console.log(name, image, id, type)
    return (
        <article className={styles.thumbnail} >
            <div className={styles.thumbnail__img_container}>
                <img  
                    alt={`Image for the show ${name}`} 
                    src={image.medium}
                    className={styles.thumbnail__img}
                />
            </div>
            <div className={styles.thumbnail__content}>
                <h3 className={styles.thumbnail__name}>{name}</h3>
                <h4 className={styles.thumbnail_type}>{type}</h4>
            </div>
            <Link href={`/show/${id}`} className={styles.thumbnail__link}>
                <a className={styles.thumbnail__button}>View show details</a>
            </Link>          
        </article>
    )
}

export default ShowThumbnail

