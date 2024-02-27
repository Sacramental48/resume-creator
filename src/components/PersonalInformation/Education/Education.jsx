import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import EducationField from './EducationField/EducationField.jsx'
import styles from './Education.module.css'

const Education = () => {
    const [educationField, setEducationField] = React.useState([]);

    const addNewEducationField = () => {
        setEducationField([...educationField, { id: Date.now() }]);
    }

    const deleteCurrentField = (id) => {
        setEducationField(educationField.filter(item => item.id !== id));
    }

    return (
        <section className={styles.education}>
            <h2 className={styles.educationTitle}>Education</h2>
            {educationField.map((field) => (
                <EducationField key={field.id} id={field.id} onDelete={() => deleteCurrentField(field.id)} />
            ))}
            <Button text='Add' color="active" onClick={addNewEducationField}></Button>
        </section>
    )
}

export default Education;