import React from 'react'
import ExperienceField from './ExperienceField/ExperienceField.jsx'
import ControlsAccordion from '../Reusable/ReusableAcardionControls/ControlsAccordion.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addExperienceField, deleteExperienceField, removeAllExperienceFields } from '@/store/actions/experienceActions.js'
import { getBooleanValue } from '@/store/actions/booleanAction.js'
import styles from './Experience.module.css'

const Experience = () => {
    const [experienceField, setExperienceField] = React.useState([]);
    const [isOpenExperience, setIsOpenExperience] = React.useState(false);

    const dispatch = useDispatch();
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue);
    
    const addNewExperienceField = (e) => {
        e.stopPropagation();
        const newField = { id: Date.now() };
        setExperienceField([...experienceField, newField]);
        dispatch(addExperienceField());
        dispatch(getBooleanValue(false));
    };

    const deleteCurrentField = (id, index) => {
        const updatedFields = experienceField.filter(field => field.id !== id);
        setExperienceField(updatedFields);
        dispatch(deleteExperienceField(index));
    };

    function deleteAllExperienceField() {
        setExperienceField([]);
        dispatch(removeAllExperienceFields());
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setExperienceField([]);
            dispatch(removeAllExperienceFields());
        }
    }, [toggleBooleanValue]);
    
    return (
        <ControlsAccordion
            name={'Experience'}
            addFunction={addNewExperienceField}
            deleteFunction={deleteAllExperienceField}
            arrayValues={experienceField}
            isOpen={isOpenExperience}
            setIsOpen={setIsOpenExperience}
        >
            {isOpenExperience && (
                <section className={styles.experience}>
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
            )}
        </ControlsAccordion>
    )
}

export default Experience;