import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setLastName, setTitle, setPhoto, setAddress, setPhoneNumber, setEmail, setDescription } from '@/store/actions/personalActions.js';
import Experience from './Experience/Experience.jsx'
import Education from './Education/Education.jsx'
import CustomInput from '@/components/UI/Input/Input.jsx'
import Group from './Group/Group.jsx'
import styles from './PersonalInformation.module.css'

const PersonalInformation = () => {
    const inputDataMainField = useSelector(state => state.personalField);
    const dispatch = useDispatch();

    const getInputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                dispatch(setFirstName(value));
                break;
            case 'lastName':
                dispatch(setLastName(value));
                break;
            case 'title':
                dispatch(setTitle(value));
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

    return (
        <form className={styles.form} onSubmit = {(event) => event.preventDefault()}>
            <section className={styles.fieldInfo}>
                <h2 className={styles.title}>Personal Information</h2>
                <CustomInput type="text" name="firstName" value={inputDataMainField.firstName} onChange={getInputValue} placeholder="First name" />
                <CustomInput type="text" name="lastName" value={inputDataMainField.lastName} onChange={getInputValue} placeholder="Last name" />
                <CustomInput type="text" name="title" value={inputDataMainField.title} onChange={getInputValue} placeholder="Title" />
                <CustomInput type="text" name="photo" value={inputDataMainField.photo} onChange={getInputValue} placeholder="Your photo" />
                <CustomInput type="text" name="address" value={inputDataMainField.address} onChange={getInputValue} placeholder="Address" />
                <CustomInput type="tel" name="phoneNumber" value={inputDataMainField.phoneNumber} onChange={getInputValue} placeholder="Phone number" />
                <CustomInput type="email" name="email" value={inputDataMainField.email} onChange={getInputValue} placeholder="Email" />
                <CustomInput type="text" name="description" value={inputDataMainField.description} onChange={getInputValue} placeholder="Description" />
            </section>
            <Experience />
            <Education />
            <Group />
        </form>
    )
}

export default PersonalInformation;