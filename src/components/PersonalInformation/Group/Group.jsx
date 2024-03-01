import React from 'react'
import styles from './Group.module.css'
import Button from '@/components/UI/Button/Button.jsx'
import { useDispatch } from 'react-redux'
import { setFirstName, setLastName, setTitle, setPhoto, setAddress, setPhoneNumber, setEmail, setDescription } from '@/store/actions/personalActions.js';

const Group = () => {
    const dispatch = useDispatch();
    
    const resetInputValue = () => {
        dispatch(setFirstName(''));
        dispatch(setLastName(''));
        dispatch(setTitle(''));
        dispatch(setPhoto(''));
        dispatch(setAddress(''));
        dispatch(setPhoneNumber(''));
        dispatch(setEmail(''));
        dispatch(setDescription(''));
    };
    return (
        <section className={styles.group}>
            <Button text='Reset' color="reset" className={styles.groupReset} onClick={resetInputValue}>Reset</Button>
            <Button text='PDF' color="pdf" className={styles.groupPdf}>PDF</Button>
        </section>
    )
}

export default Group;