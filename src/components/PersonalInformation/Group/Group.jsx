import React from 'react';
import styles from './Group.module.css';
import { useDispatch } from 'react-redux';
import { getBooleanValue, togglePdfValue } from '@/store/actions/booleanAction.js';

const Group = () => {
    const dispatch = useDispatch();

    const togglePDF = () => {
        dispatch(togglePdfValue(false));
    }
    const removeInputsAndFields = () => {
        dispatch(getBooleanValue(true));
    };
    return (
        <section className={styles.group}>
            <button className='button' onClick={removeInputsAndFields}>Remove</button>
            <button className='button' onClick={togglePDF}>PDF</button>
        </section>
    )
}

export default Group;