import React from 'react'
import CutomInput from '@/components/UI/Input/Input.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setSkillName, setSkillLevel, addSkillField} from '@/store/actions/skillsAction'
import styles from './Skills.module.css'

const Skills = () => {
    const dispatch = useDispatch();
    const [rangeValue, setRangeValue] = React.useState([20]);
    const [isOpen, setIsOpen] = React.useState(true);
    const [skillFields, setSkillFiels] = React.useState([]);

    function getInputValue(e) {
        const { name, value } = e.target;
        const index = Number(e.target.dataset.index);

        switch(name) {
            case 'skills':
                dispatch(setSkillName(value, index));
                break;
            case 'level': 
                dispatch(setSkillLevel(value, index));
                setRangeValue(prevValues => {
                    const newValues = [...prevValues];
                    newValues[index] = value;
                    return newValues;
                });
                break;
            default:
                break
        }
    };

    function addSkills(e) {
        const newField = { id: Date.now() };
        e.stopPropagation()
        setSkillFiels([...skillFields, newField]);
        setRangeValue([...rangeValue, 20]);
        dispatch(addSkillField());
        setIsOpen(true);
        // dispatch(getBooleanValue(false));
    }

    return (
        <section className={styles.section}>
            <div className={styles.details} onClick={() => skillFields.length ? setIsOpen(!isOpen) : null}>
                <h2 className={styles.title}>Skills</h2>
                <button onClick={addSkills}>add</button>
            </div>
            {isOpen && (
                <div className={styles.body}>
                    {skillFields.map((field, index) => (
                        <div key={field.id} className={styles.skillField}>
                            <CutomInput 
                                className={styles.skillName} 
                                type="text" 
                                name="skills" 
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
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Skills;