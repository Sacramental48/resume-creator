import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import styles from './EducationField.module.css'
import { useDispatch } from 'react-redux'
import { setUniversityName, setCity, setDegree, setSubject, setFrom, setTo } from '@/store/actions/educationActions.js';

const EducatioField = ({deleteField, index}) => {
    const dispatch = useDispatch();

    function getEducationValue(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'universityName':
                dispatch(setUniversityName(value, index));
                break;
            case 'city':
                dispatch(setCity(value, index));
                break;
            case 'degree':
                dispatch(setDegree(value, index));
                break;
            case 'subject':
                dispatch(setSubject(value, index));
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
            <CustomInput type="text" name="universityName" onChange={getEducationValue} placeholder="Position" /> 
            <CustomInput type="text" name="city" onChange={getEducationValue} placeholder="City" /> 
            <CustomInput type="text" name="degree" onChange={getEducationValue} placeholder="Degree" /> 
            <CustomInput type="text" name="subject" onChange={getEducationValue} placeholder="Subject" /> 
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