import Link from 'next/link'
import { useRouter } from 'next/router'
//=========> CSS
import styles from './TheHeader.module.scss'

const countries = [
    {name: 'Select Country', code: ''},
    {name: 'United States', code: 'us'},
    {name: 'Great Britain', code: 'gb'},
    {name: 'Germany', code: 'de'}
]

export default function TheHeader() {

    const router = useRouter() 

    const selectedCoutry = router.query.country || ''

    const renderCoutryOptions = () => {
        return countries.map(country => {
            return <option value={country.code}>{country.name}</option>
        })
    }

    const goToCountryShows = (e) => {
        router.push('/[country]', `/${e.target.value}`)
    }

    return (
        <div className={styles.topbar}>
            <div className={styles.topbar__container}>
                <Link href="/">
                    <span className={styles.topbar__logo}>Next.js TeleTV</span>
                </Link>
                <form className={styles.topbar__form}>
                   <select 
                    defaultValue={selectedCoutry} 
                    onChange={(e) => goToCountryShows(e)}
                    className={styles.topbar__select}
                    >
                        {renderCoutryOptions()}
                   </select>
                </form>
                <ul className={styles.topbar__list}>
                    <li className={styles.topbar__item}>
                        <Link href="/about">
                            <a className={styles.topbar__link}>About</a>
                        </Link>
                    </li>
                    <li className={styles.topbar__item}>
                        <Link href="/contacts">
                            <a className={styles.topbar__link}>Contacts</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}