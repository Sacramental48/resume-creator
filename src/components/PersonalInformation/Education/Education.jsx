import React from 'react'
import EducationField from './EducationField/EducationField.jsx'
import styles from './Education.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEducationField, clearAllEducationFields} from '@/store/actions/educationActions.js'

const Education = ({addNewEducationField, educationField, setEducationField}) => {
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue)
    const dispatch = useDispatch();

    const deleteCurrentField = (id, index) => {
        const updatedFields = educationField.filter(field => field.id !== id);
        setEducationField(updatedFields);
        dispatch(deleteEducationField(index));
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setEducationField([]);
            dispatch(clearAllEducationFields());
        }
    }, [toggleBooleanValue])

    return (
        <section className={styles.education}>
            <h2 className={styles.educationTitle}>Education</h2>
            {educationField.map((field, index) => (
                <EducationField 
                    key={field.id} 
                    index={index} 
                    deleteField={() => deleteCurrentField(field.id, index)} 
                    addNewEducationField={addNewEducationField}
                    educationField={educationField}
                    />
            ))}
        </section>
    )
}

export default Education;