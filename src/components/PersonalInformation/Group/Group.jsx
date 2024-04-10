import React from 'react';
import TitleResumePage from '@/components/TitleResumePage/TitleResumePage.jsx';
import { useDispatch } from 'react-redux';
import { pdf } from '@react-pdf/renderer';
import { getBooleanValue } from '@/store/actions/booleanAction.js';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import styles from './Group.module.css';

const Group = () => {
    const inputPersonalDataField = useSelector(state => state.personalField);
    const experienceFields = useSelector(state => state.experienceStateField);
    const educationFields = useSelector(state => state.educationStateField);
    const skillFields = useSelector(state => state.skillsStateField);
    const languageFields = useSelector(state => state.languageStateField);
    const referenceFields = useSelector(state => state.referenceStateField);

    const dispatch = useDispatch();

    const removeInputsAndFields = () => {
        dispatch(getBooleanValue(true));
    };

    const downloadPDF = async (event) => {
        event.preventDefault();
        const blob = await pdf(
            <TitleResumePage 
            inputPersonalDataField={inputPersonalDataField} 
            experienceFields={experienceFields} 
            educationFields={educationFields} 
            skillFields={skillFields} 
            languageFields={languageFields} 
            referenceFields={referenceFields} 
            />
        ).toBlob();
    
        saveAs(blob, 'myResumeFile.pdf');
    }

    return (
        <section className={styles.group}>
            <button className='button' onClick={removeInputsAndFields}>Remove</button>
            <button className='button' onClick={downloadPDF}>Download</button>
        </section>
    )
}

export default Group;