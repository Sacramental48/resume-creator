import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setLastName, setPosition, setPhoto, setAddress, setPhoneNumber, setEmail, setDescription, clearPersonalField} from '@/store/actions/personalActions.js';
import { getBooleanValue } from '@/store/actions/booleanAction.js';
import Experience from './Experience/Experience.jsx'
import Education from './Education/Education.jsx'
import Skills from './Skills/SkillsField.jsx'
import LanguageLevel from './LanguageLevel/Language.jsx'
import Group from './Group/Group.jsx'
import Reference from './Reference/Reference.jsx';
import CustomInput from '@/components/UI/Input/Input.jsx'
import styles from './PersonalInformation.module.css'

const PersonalInformation = () => {
    const inputDataMainField = useSelector(state => state.personalField);
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue)
    const dispatch = useDispatch();

    const getInputValue = (e) => {
        const { name, value } = e.target;
        dispatch(getBooleanValue(false));
        
        switch (name) {
            case 'firstName':
                dispatch(setFirstName(value));
                break;
            case 'lastName':
                dispatch(setLastName(value));
                break;
            case 'position':
                dispatch(setPosition(value));
                break;
            case 'photo':
                dispatch(setPhoto(value));
                break;
            case 'address':
                dispatch(setAddress(value));
                break;
            case 'phoneNumber':
                dispatch(setPhoneNumber(value));
                break;
            case 'email':
                dispatch(setEmail(value));
                break;
            case 'description':
                dispatch(setDescription(value));
                break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            dispatch(clearPersonalField());
        }
    }, [toggleBooleanValue])

    return (
        <form className={styles.form} onSubmit = {(event) => event.preventDefault()}>
            <section className={styles.inputField}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Personal Information</h2>
                    <Group />
                </div>
                <div className={styles.body}>
                    <div className={styles.columnA}>
                        <div className='inputAdaptiveFieldsBlock'>
                            <CustomInput type="text" name="firstName" value={inputDataMainField.firstName} onChange={getInputValue} placeholder="Name" />
                            <CustomInput type="text" name="lastName" value={inputDataMainField.lastName} onChange={getInputValue} placeholder="Surname" />
                        </div>
                        <CustomInput type="text" name="position" value={inputDataMainField.position} onChange={getInputValue} placeholder="Position" />
                        <CustomInput type="tel" name="phoneNumber" value={inputDataMainField.phoneNumber} onChange={getInputValue} placeholder="Phone number" />
                    </div>
                    <div className={styles.columnB}>
                        <CustomInput type="email" name="email" value={inputDataMainField.email} onChange={getInputValue} placeholder="Email" />
                        <CustomInput type="text" name="address" value={inputDataMainField.address} onChange={getInputValue} placeholder="Address" />
                        <CustomInput type="text" name="photo" value={inputDataMainField.photo} onChange={getInputValue} placeholder="Write the your (photo) URL" />
                    </div>
                </div>
                <div>
                    <textarea className={styles.textArea} type="text" name="description" value={inputDataMainField.description} onChange={getInputValue} placeholder="Write About yourself" />
                </div>
            </section>
            <section className={styles.childFields}>
                <Experience />
                <Education />
                <Skills />
                <LanguageLevel />
                <Reference />
            </section>
        </form>
    )
}

export default PersonalInformation;