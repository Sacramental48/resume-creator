import React from 'react'
import PersonalInformation from '../PersonalInformation/PersonalInformation.jsx'
import TitleResumePage from '../TitleResumePage/TitleResumePage'
import styles from './Main.module.css'

const Main = () => {
    return (
        <main className={styles.main}>
            {/* <PersonalInformation /> */}
            <TitleResumePage />
        </main>
    )
}

export default Main;