import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import ExperienceField from './ExperienceField/ExperienceField.jsx'
import styles from './Experience.module.css'
import { useDispatch } from 'react-redux'
import { addExperienceField, deleteExperienceField} from '@/store/actions.js'
const Experience = () => {
    const dispatch = useDispatch();
    const [experienceField, setExperienceField] = React.useState([]);

    const addNewExperienceField = () => {
        setExperienceField(
            [...experienceField, { id: Date.now() }]);
        dispatch(addExperienceField());
    };

    const deleteCurrentField = (id) => {
        console.log(id);
        setExperienceField(experienceField.filter(item => item.id !== id));
        dispatch(deleteExperienceField(id));
    };

    return (
        <section className={styles.experience}>
            <h2 className={styles.experienceTitle}>Experience</h2>
            {experienceField.map((field) => (
                <ExperienceField key={field.id} id={field.id} deleteCreatedField={() => deleteCurrentField(field.id)} />
            ))}
            <Button text='Add' color="active" type="button" onClick={addNewExperienceField}></Button>
        </section>
    )
}

export default Experience;