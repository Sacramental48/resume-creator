import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import { useDispatch } from 'react-redux'
import { setPosition, setCompany, setFrom, setTo, setAccomplishments } from '@/store/actions/experienceActions.js';
import { RiDeleteBack2Line } from "@react-icons/all-files/ri/RiDeleteBack2Line";
import { FiFilePlus } from "@react-icons/all-files/fi/FiFilePlus";
import styles from './ExperienceField.module.css'

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
            <div className={'inputAdaptiveFieldsBlock'} style={{ flexWrap: 'nowrap' }}>
                <CustomInput type="text" name="position" onChange={getInputValue} placeholder="Position" />
                <CustomInput className={styles.date} type="date" name="from" onChange={getInputValue} />
                <CustomInput className={styles.date} type="date" name="to" onChange={getInputValue} />
            </div>
            <CustomInput type="text" name="company" onChange={getInputValue} placeholder="Company" />
            <textarea className={styles.textArea} type="text" name="accomplishments" onChange={getInputValue} placeholder="Accomplishments" />
            <div className={styles.buttons}>
                {index === experienceField.length - 1 && <FiFilePlus size={30} onClick={addNewExperienceField} title="Add" />}
                <RiDeleteBack2Line size={30} onClick={deleteField} title="Delete" />
            </div>
        </section>
    )
}

export default ExperienceField;