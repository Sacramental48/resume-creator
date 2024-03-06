import React from 'react'
import Button from '@/components/UI/Button/Button.jsx'
import EducationField from './EducationField/EducationField.jsx'
import styles from './Education.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addEducationField, deleteEducationField, clearAllEducationFields} from '@/store/actions/educationActions.js'
import { getBooleanValue } from '@/store/actions/booleanAction.js';

const Education = () => {
    const [educationField, setEducationField] = React.useState([]);
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue)
    const dispatch = useDispatch();

    const addNewEducationField = () => {
        setEducationField([...educationField, { id: Date.now() }]);
        dispatch(addEducationField());
        dispatch(getBooleanValue(false));
    }

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
                <EducationField key={field.id} index={index} deleteField={() => deleteCurrentField(field.id, index)} />
            ))}
            <Button text='Add' color="active" onClick={addNewEducationField}></Button>
        </section>
    )
}

export default Education;