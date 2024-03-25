import React from 'react'
import CutomInput from '@/components/UI/Input/Input.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setSkillName, setSkillLevel, addSkillField, deleteCurrentSkillField, deleteAllSkillFields } from '@/store/actions/skillsAction'
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";
import styles from './Skills.module.css'

const Skills = () => {
    const skillFields = useSelector(state => state.skillsStateField);
    
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
        e.stopPropagation()
        const newField = { id: Date.now() };
        setSkillFielsValue([...skillFieldsValue, newField]);
        dispatch(addSkillField());
        dispatch(setSkillLevel(20, skillFields.length));
        setRangeValue([...rangeValue, 20]);
        setIsOpen(true);
    }

    function deleteSkill(_, index) {
        const updatedSkillsField = skillFieldsValue.filter((_, idx) => idx !== index);
        setSkillFielsValue(updatedSkillsField);
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
        setRangeValue([])
    }

    React.useEffect(() => {
        if(!skillFieldsValue.length) {
            setIsOpen(false)
        }
    }, [skillFieldsValue])

    return (
        <section className={styles.section}>
            {/* DRY!!!! */}
            <div className={styles.details} onClick={() => skillFieldsValue.length ? setIsOpen(!isOpen) : null}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.controlsContainer}>
                    <IoIosAddCircleOutline onClick={addSkill} size={30} />
                    <FaRegTrashAlt onClick={deleteAllSkills} size={24} />
                </div>
            </div>
            {isOpen && (
                <div className={styles.body}>
                    {skillFieldsValue.map((field, index) => (
                        <div key={field.id} className={styles.skillField}>
                            <>
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
                            </>
                            <FaRegTrashAlt className={styles.trash} size={18} onClick={() => deleteSkill(field.id, index)} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Skills;