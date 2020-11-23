//========> CSS
import styles from './HomeFeature.module.scss'

const HomeFeature = ({ feature }) => {
    const { name, icon } = feature
    return (
        <div>
            {name}
        </div>
    )
}

export default HomeFeature
