import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
//=========> CSS
import styles from './TheHeader.module.scss'

const countries = [
    {id: 1, name: 'Select Country', code: ''},
    {id: 2, name: 'United States', code: 'us'},
    {id: 3, name: 'Great Britain', code: 'gb'}
]

export default function TheHeader() {

    const router = useRouter() 

    const [ selectedCoutry , setSelectedCoutry ] = useState(router.query.country || '') 

    const renderCoutryOptions = () => {
        return countries.map(country => {
            return <option key={country.id} value={country.code}>{country.name}</option>
        })
    }

    const goToCountryShows = (e) => {
        setSelectedCoutry(e.target.value)
        if (!(e.target.value === '')) {
            router.push('/[country]', `/${e.target.value}`)
        } else {
            router.push('/')
        }
    }

    return (
        <div className={styles.topbar}>
            <div className={styles.topbar__container}>
                <Link href="/">
                    <span 
                        className={styles.topbar__logo}
                        onClick={() => setSelectedCoutry('')}
                    >
                        Next.js TeleTV
                    </span>
                </Link>
                <form className={styles.topbar__form}>
                   <select 
                    value={selectedCoutry} 
                    onChange={(e) => goToCountryShows(e)}
                    className={styles.topbar__select}
                    >
                        {renderCoutryOptions()}
                   </select>
                </form>
                <ul className={styles.topbar__list}>
                    <li className={styles.topbar__item}>
                        <Link href="/">
                            <a className={styles.topbar__link}>About</a>
                        </Link>
                    </li>
                    <li className={styles.topbar__item}>
                        <Link href="/">
                            <a className={styles.topbar__link}>Contacts</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}