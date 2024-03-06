import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import ExperienceField from './ExperienceField/ExperienceField.jsx'
import styles from './Experience.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addExperienceField, deleteExperienceField, clearAllExperienceFields} from '@/store/actions/experienceActions.js'

const Experience = () => {
    const dispatch = useDispatch();
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue);
    const [experienceField, setExperienceField] = React.useState([]);

    const addNewExperienceField = () => {
        const newField = { id: Date.now() };
        setExperienceField([...experienceField, newField]);
        dispatch(addExperienceField());
        clearAllExperienceFields(false);
    };

    const deleteCurrentField = (id, index) => {
        const updatedFields = experienceField.filter(field => field.id !== id);
        setExperienceField(updatedFields);
        dispatch(deleteExperienceField(index));
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setExperienceField([]);
            dispatch(clearAllExperienceFields());
        }
    }, [toggleBooleanValue])

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