import Link from 'next/link'
//=========> CSS
import styles from './TheHeader.module.scss'

export default function TheHeader() {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbar__container}>
                <Link href="/">
                    <span className={styles.topbar__logo}>TeleTV</span>
                </Link>
                <form>
                    <input type="text" />
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