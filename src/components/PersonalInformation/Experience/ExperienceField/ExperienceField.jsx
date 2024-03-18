import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import styles from './ExperienceField.module.css'
import { useDispatch } from 'react-redux'
import { setPosition, setCompany, setFrom, setTo, setAccomplishments } from '@/store/actions/experienceActions.js';

const ExperienceField = ({ deleteField, experienceField, addNewExperienceField, index }) => {
    const dispatch = useDispatch();

    const getInputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'position':
                dispatch(setPosition(value.toUpperCase(), index));
                break;
            case 'company':
                dispatch(setCompany(value.toUpperCase(), index));
                break;
            case 'from':
                dispatch(setFrom(value, index));
                break;
            case 'to':
                dispatch(setTo(value, index));
                break;
            case 'accomplishments':
                dispatch(setAccomplishments(value, index));
                break;
            default:
                break;
        }
    };

    return (
        <section className={styles.experienceField}>
            <CustomInput type="text" name="position" onChange={getInputValue} placeholder="Position" />
            <CustomInput type="text" name="company" onChange={getInputValue} placeholder="Company" />
            <div className='inputAdaptiveFieldsBlock'>
                <CustomInput type="text" name="from" onChange={getInputValue} placeholder="From (year)" />
                <CustomInput type="text" name="to" onChange={getInputValue} placeholder="To (year)" />
            </div>
            <textarea className={styles.textArea} type="text" name="accomplishments" onChange={getInputValue} placeholder="Accomplishments" />
            <button className="button delete" onClick={deleteField}>Delete</button>
            {index === experienceField.length - 1 && <button className='button active' onClick={addNewExperienceField}>Add</button>}
        </section>
    )
}

export default ExperienceField;