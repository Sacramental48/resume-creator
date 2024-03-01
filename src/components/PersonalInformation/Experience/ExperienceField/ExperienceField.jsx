import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import Button from '@/components/UI/Button/Button.jsx'
import styles from './ExperienceField.module.css'
import { useDispatch } from 'react-redux'
import { setPosition, setCompany, setCity, setFrom, setTo, deleteExperienceField } from '@/store/actions/experienceActions.js';

const ExperienceField = ({ index }) => {
    const dispatch = useDispatch();

    const getInputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'position':
                dispatch(setPosition(value, index));
                break;
            case 'company':
                dispatch(setCompany(value, index));
                break;
            case 'city':
                dispatch(setCity(value, index));
                break;
            case 'from':
                dispatch(setFrom(value, index));
                break;
            case 'to':
                dispatch(setTo(value, index));
                break;
            default:
                break;
        }
    };

    const deleteCurrentField = () => {
        dispatch(deleteExperienceField(index));
    };

    return (
        <section className={styles.experienceField}>
            <CustomInput type="text" name="position" onChange={getInputValue} placeholder="Position" />
            <CustomInput type="text" name="company" onChange={getInputValue} placeholder="Company" />
            <CustomInput type="text" name="city" onChange={getInputValue} placeholder="City" />
            <CustomInput type="text" name="from" onChange={getInputValue} placeholder="From (year)" />
            <CustomInput type="text" name="to" onChange={getInputValue} placeholder="To (year)" />
            <Button text="Delete" color="delete" onClick={deleteCurrentField}></Button>
        </section>
    )
}

export default ExperienceField;