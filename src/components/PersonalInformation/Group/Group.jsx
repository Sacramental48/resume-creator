import React from 'react'
import styles from './Group.module.css'
import { useDispatch } from 'react-redux'
import { getBooleanValue } from '@/store/actions/booleanAction.js';

const Group = () => {
    const dispatch = useDispatch();
    
    const removeInputsAndFields = () => {
        dispatch(getBooleanValue(true));
    };
    return (
        <section className={styles.group}>
            <button className='button reset' onClick={removeInputsAndFields}>Remove</button>
            <button className='button pdf'>PDF</button>
        </section>
    )
}

export default Group;