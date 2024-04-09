import React from 'react'
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <p className={styles.logo}>CV CREATOR</p>
            </div>
        </header>
    )
}

export default Header;