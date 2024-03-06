import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import EducationField from './EducationField/EducationField.jsx'
import styles from './Education.module.css'
import { useDispatch } from 'react-redux'
import { addEducationField, deleteEducationField} from '@/store/actions/educationActions.js'

const Education = () => {
    const [educationField, setEducationField] = React.useState([]);
    const dispatch = useDispatch();

    const addNewEducationField = () => {
        setEducationField([...educationField, { id: Date.now() }]);
        dispatch(addEducationField());
    }

    const deleteCurrentField = (id, index) => {
        const updatedFields = educationField.filter(field => field.id !== id);
        setEducationField(updatedFields);
        dispatch(deleteEducationField(index));
    };

    return (
        <section className={styles.education}>
            <h2 className={styles.educationTitle}>Education</h2>
            {educationField.map((field, index) => (
                <EducationField key={field.id} index={index} deleteField={() => deleteCurrentField(field.id, index)} />
            ))}
            <Button text='Add' color="active" onClick={addNewEducationField}></Button>
        </section>
    )
}

export default Education;