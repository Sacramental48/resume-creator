import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import Button from '@/components/UI/Button/Button.jsx'
import styles from './ExperienceField.module.css'
import { useDispatch } from 'react-redux'
import { setPosition, setCompany, setCity, setFrom, setTo } from '@/store/actions.js';

const ExperienceField = ({deleteCreatedField, id}) => {
    const dispatch = useDispatch();
    const getYear = new Date().getFullYear();
    
    const getInputValue = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'position':
                dispatch(setPosition(value, id));
                break;
            case 'company':
                dispatch(setCompany(value, id));
                break;
            case 'city':
                dispatch(setCity(value, id));
                break;
            case 'from':
                dispatch(setFrom(value, id));
                break;
            case 'to':
                dispatch(setTo(value, id));
                break;
            default:
                break;
        }
    };

    const resetExperienceInputValue = () => {
        dispatch(setPosition('', id));
        dispatch(setCompany('', id));
        dispatch(setCity('', id));
        dispatch(setFrom('', id));
        dispatch(setTo('', id));
    };

    return (
        <section className={styles.experienceField}>
            <CustomInput type="text" name="position" onChange={getInputValue} placeholder="Position" />
            <CustomInput type="text" name="company" onChange={getInputValue} placeholder="Company" />
            <CustomInput type="text" name="city" onChange={getInputValue} placeholder="City" />
            <CustomInput type="text" name="from" onChange={getInputValue} placeholder="From (year)" />
            <CustomInput type="text" name="to" onChange={getInputValue} placeholder="To (year)" />
            <CustomInput type="number" min="1900" max="2099" step="1" onChange={getInputValue} value={getYear} />
            <Button text="Delete" color="delete" onClick={() => { deleteCreatedField(); resetExperienceInputValue(); }}></Button>
        </section>
    )
}

export default ExperienceField;