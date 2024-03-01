import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import ExperienceField from './ExperienceField/ExperienceField.jsx'
import styles from './Experience.module.css'
import { useDispatch } from 'react-redux'
import { addExperienceField} from '@/store/actions/experienceActions.js'

const Experience = () => {
    const dispatch = useDispatch();
    const [experienceField, setExperienceField] = React.useState([]);

    const addNewExperienceField = () => {
        setExperienceField(
            [...experienceField, { id: Date.now() }]);
        dispatch(addExperienceField());
    };

    return (
        <section className={styles.experience}>
            <h2 className={styles.experienceTitle}>Experience</h2>
            {experienceField.map((_, index) => (
                <ExperienceField key={index} index={index} />
            ))}
            <Button text='Add' color="active" type="button" onClick={addNewExperienceField}></Button>
        </section>
    )
}

export default Experience;