import React from 'react'
import CutomInput from '@/components/UI/Input/Input.jsx'
import ControlsAccordion from '../Reusable/ReusableAcardionControls/ControlsAccordion'
import { useDispatch, useSelector } from 'react-redux'
import { setSkillName, setSkillLevel, addSkillField, deleteCurrentSkillField, deleteAllSkillFields } from '@/store/actions/skillsAction'
import { getBooleanValue } from '@/store/actions/booleanAction.js';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import styles from './Skills.module.css'

const Skills = () => {
    const skillFields = useSelector(state => state.skillsStateField);
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue);

    const dispatch = useDispatch();
    
    const [rangeValue, setRangeValue] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [skillFieldsValue, setSkillFielsValue] = React.useState([]);

    function getInputValue(e) {
        const { name, value } = e.target;
        const index = Number(e.target.dataset.index);

        switch(name) {
            case 'skills':
                dispatch(setSkillName(value, index));
                break;
            case 'level': 
                dispatch(setSkillLevel(value, index));
                setRangeValue(values => {
                    const newValues = [...values];
                    newValues[index] = +value;
                    return newValues;
                });
                break;
            default:
                break;
        }
    };

    function addSkill(e) {
        e.stopPropagation();
        const id = { id: Date.now() };
        setSkillFielsValue([...skillFieldsValue, id]);
        dispatch(addSkillField());
        dispatch(setSkillLevel(20, skillFields.length));
        setRangeValue([...rangeValue, 20]);
        setIsOpen(true);
        dispatch(getBooleanValue(false));
    }

    function deleteSkill(_, index) {
        const updatedSkillFields = skillFieldsValue.filter((_, idx) => idx !== index);
        setSkillFielsValue(updatedSkillFields);
        dispatch(deleteCurrentSkillField(index));
        setRangeValue(values => {
            const currentValue = [...values];
            currentValue.splice(index, 1);
            return currentValue;
        })
    }
    function deleteAllSkills() {
        setSkillFielsValue([]);
        dispatch(deleteAllSkillFields());
        setRangeValue([]);
    }

    React.useEffect(() => {
        if(!skillFieldsValue.length) {
            setIsOpen(false);
        }
    }, [skillFieldsValue]);

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setSkillFielsValue([]);
            setRangeValue([]);
            dispatch(deleteAllSkillFields());
        }
    }, [toggleBooleanValue])

    return (
        <ControlsAccordion 
            name={'Skills'}
            addFunction={addSkill}
            deleteFunction={deleteAllSkills}
            arrayValues={skillFieldsValue}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
        {isOpen && (
            <div className={styles.body}>
                {skillFieldsValue.map((field, index) => (
                    <div key={field.id} className={styles.skillField}>
                        <CutomInput
                            className={styles.skillName}
                            type="text"
                            name="skills"
                            maxLength="14"
                            value={skillFields.skillName}
                            placeholder="Skill Name"
                            onChange={getInputValue}
                            data-index={index}
                        />
                        <div className={styles.skillLevel}>
                            <span>{rangeValue[index]}/100</span>
                            <CutomInput
                                className={styles.level}
                                type={'range'}
                                name="level"
                                defaultValue={20}
                                step={10}
                                min="0"
                                max="100"
                                onChange={getInputValue}
                                data-index={index}
                            />
                        </div>
                        <FaRegTrashAlt className={styles.trash} size={24} onClick={() => deleteSkill(field.id, index)} />
                    </div>
                ))}
            </div>
        )}
        </ControlsAccordion>
    )
}

export default Skills;