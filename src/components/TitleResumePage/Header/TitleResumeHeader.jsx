import React from 'react'
import { useSelector } from 'react-redux'
import styles from './TitleResumeHeader.module.css'
const TitleResumeHeader = () => {
    const inputDataField = useSelector(state => state.personalField);
    return (
        <div className={styles.header}>
            <span className={styles.headerName}>{`${inputDataField.firstName || 'Name'} ${inputDataField.lastName || 'Last Name'}`}</span>
            <p className={styles.headerTitle}>{inputDataField.title || 'Title'}</p>
        </div>
    )
}

export default TitleResumeHeader;