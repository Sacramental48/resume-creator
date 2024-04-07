import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import { useDispatch } from 'react-redux'
import { setUniversityName, setFaculty, setFrom, setTo } from '@/store/actions/educationActions.js';
import { RiDeleteBack2Line } from "@react-icons/all-files/ri/RiDeleteBack2Line";
import { FiFilePlus } from "@react-icons/all-files/fi/FiFilePlus";
import styles from './EducationField.module.css'

const EducatioField = ({addNewEducationField, educationField, deleteField, index}) => {
    const dispatch = useDispatch();

    function getEducationValue(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'universityName':
                dispatch(setUniversityName(value, index));
                break;
            case 'faculty':
                dispatch(setFaculty(value, index));
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
    }

    return ( 
        <section className={styles.educationField}> 
            <div className='inputAdaptiveFieldsBlock'> 
                <CustomInput type="text" name="universityName" onChange={getEducationValue} placeholder="Educational Institution" /> 
                <CustomInput type="text" name="faculty" onChange={getEducationValue} placeholder="Faculty" /> 
            </div> 
            <div className='inputAdaptiveFieldsBlock'> 
                <CustomInput type="text" name="from" onChange={getEducationValue} placeholder="From (year)" /> 
                <CustomInput type="text" name="to" onChange={getEducationValue} placeholder="To (year)" /> 
            </div> 
            <div className={styles.buttons}>
                {index === educationField.length - 1 && <FiFilePlus size={30} onClick={addNewEducationField} title="Add" />}
                <RiDeleteBack2Line size={30} onClick={deleteField} title="Delete" />
            </div>
        </section> 
      )
      
}

export default EducatioField;