import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import ExperienceField from './ExperienceField/ExperienceField.jsx'
import styles from './Experience.module.css'
import { useDispatch } from 'react-redux'
import { addExperienceField, deleteExperienceField} from '@/store/actions/experienceActions.js'

const Experience = () => {
    const dispatch = useDispatch();
    const [experienceField, setExperienceField] = React.useState([]);

    const addNewExperienceField = () => {
        const newField = { id: Date.now() };
        setExperienceField([...experienceField, newField]);
        dispatch(addExperienceField());
    };

    const deleteCurrentField = (id, index) => {
        const updatedFields = experienceField.filter(field => field.id !== id);
        setExperienceField(updatedFields);
        dispatch(deleteExperienceField(index));
    };

    return (
        <section className={styles.experience}>
            <h2 className={styles.experienceTitle}>Experience</h2>
            {experienceField.map((field, index) => (
                <ExperienceField key={field.id} index={index} deleteField={() => deleteCurrentField(field.id, index)}/>
                
            ))}
            <Button text='Add' color="active" type="button" onClick={addNewExperienceField}></Button>
        </section>
    )
}

export default Experience;