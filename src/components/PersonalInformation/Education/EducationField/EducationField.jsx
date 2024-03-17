import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import styles from './EducationField.module.css'
import { useDispatch } from 'react-redux'
import { setUniversityName, setFaculty, setFrom, setTo } from '@/store/actions/educationActions.js';

const EducatioField = ({deleteField, index}) => {
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
          <button className='button delete' onClick={deleteField}>Delete</button> 
        </section> 
      )
      
}

export default EducatioField;