import React from 'react'
import styles from './Group.module.css'
import Button from '@/components/UI/Button/Button.jsx'
import { useDispatch } from 'react-redux'
// import { deleteAllEducationFields } from '@/store/actions/personalActions.js';
import { getBooleanValue } from '@/store/actions/booleanAction.js';

const Group = () => {
    const dispatch = useDispatch();
    
    const removeInputsAndFields = () => {
        dispatch(getBooleanValue(true));
    };
    return (
        <section className={styles.group}>
            <Button text='Remove' color="reset" className={styles.groupReset} onClick={removeInputsAndFields} />
            <Button text='PDF' color="pdf" className={styles.groupPdf} />
        </section>
    )
}

export default Group;