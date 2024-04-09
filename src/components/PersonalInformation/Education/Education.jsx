import React from 'react';
import EducationField from './EducationField/EducationField.jsx';
import ControlsAccordion from '../Reusable/ReusableAcardionControls/ControlsAccordion.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addEducationField, deleteEducationField, clearAllEducationFields} from '@/store/actions/educationActions.js';
import { getBooleanValue } from '@/store/actions/booleanAction.js';
import styles from './Education.module.css';

const Education = () => {
    const [educationField, setEducationField] = React.useState([]);
    const [isOpenEducation, setIsOpenEducation] = React.useState(false);

    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue)
    const dispatch = useDispatch();

    const addNewEducationField = (e) => {
        e.stopPropagation();
        const newField = { id: Date.now() };
        setEducationField([...educationField, newField]);
        dispatch(addEducationField());
        dispatch(getBooleanValue(false));
    };

    const deleteCurrentField = (id, index) => {
        const updatedFields = educationField.filter(field => field.id !== id);
        setEducationField(updatedFields);
        dispatch(deleteEducationField(index));
    };

    function deleteAllEducationField() {
        setEducationField([]);
        dispatch(clearAllEducationFields());
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setEducationField([]);
            dispatch(clearAllEducationFields());
        }
    }, [toggleBooleanValue])

    return (
        <ControlsAccordion
            name={'Education'}
            addFunction={addNewEducationField}
            deleteFunction={deleteAllEducationField}
            arrayValues={educationField}
            isOpen={isOpenEducation}
            setIsOpen={setIsOpenEducation}
        >
            {isOpenEducation && (
                <section className={styles.education}>
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
            )}
        </ControlsAccordion>
        
    )
}

export default Education;