import React from 'react'
import ExperienceField from './ExperienceField/ExperienceField.jsx'
import styles from './Experience.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExperienceField, removeAllExperienceFields } from '@/store/actions/experienceActions.js'

const Experience = ({addNewExperienceField, experienceField, setExperienceField}) => {
    const dispatch = useDispatch();
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue);
    

    const deleteCurrentField = (id, index) => {
        const updatedFields = experienceField.filter(field => field.id !== id);
        setExperienceField(updatedFields);
        dispatch(deleteExperienceField(index));
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setExperienceField([]);
            dispatch(removeAllExperienceFields());
        }
    }, [toggleBooleanValue])

    return (
        <section className={styles.experience}>
            <h2 className={styles.experienceTitle}>Experience</h2>
            {experienceField.map((field, index) => (
                <ExperienceField 
                    key={field.id} 
                    index={index} 
                    experienceField={experienceField} 
                    addNewExperienceField={addNewExperienceField} 
                    deleteField={() => deleteCurrentField(field.id, index)}
                />
            ))}
        </section>
    )
}

export default Experience;