import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglePdfValue } from '@/store/actions/booleanAction.js';
import styles from './Header.module.css'

const Header = () => {
    const dispatch = useDispatch();
    const togglePDFValue = useSelector(state => state.initialBooleanState.togglePDFValue);

    const togglePDF = () => {
        dispatch(togglePdfValue(true));
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <p className={styles.logo}>CV CREATOR</p>
                {!togglePDFValue && (
                    <button className='button semiColor' onClick={() => togglePDF()}>Back</button>
                )}
            </div>
        </header>
    )
}

export default Header;