//========> CSS
import styles from './HomeFeature.module.scss'

const HomeFeature = ({ feature }) => {
    const { name, icon } = feature
    return (
        <div className={styles.feature}>
            <div className={styles.feature__container}>
                <i className={icon} aria-hidden="true"></i>
                <h3 className={styles.feature__title}>{name}</h3>
                <p className={styles.feature__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore, ex? Nihil velit saepe architecto adipisci debitis fugit eveniet, 
                    eos cum, esse enim itaque, corporis tenetur delectus vel. Culpa, quo est.
                    Autem voluptatum illo ea consequatur voluptate excepturi, dolorum dicta 
                    exercitationem natus rerum veritatis culpa laboriosam obcaecati porro, 
                    fugit soluta quod deserunt nihil perspiciatis? Mollitia, dicta. Blanditiis 
                    maiores nulla ut officia.
                </p>
            </div>        
        </div>
    )
}

export default HomeFeature
