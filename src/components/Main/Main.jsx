import React from 'react'
import PersonalInformation from '../PersonalInformation/PersonalInformation.jsx'
import TitleResumePage from '../TitleResumePage/TitleResumePage'
import styles from './Main.module.css'
import { PDFViewer } from '@react-pdf/renderer'
import { useSelector } from 'react-redux';

const Main = () => {
    const inputPersonalDataField = useSelector(state => state.personalField);
    const experienceFields = useSelector(state => state.experienceStateField);
    const educationFields = useSelector(state => state.educationStateField);
    const inputDataFields = useSelector(state => state.personalField);
    const skillFields = useSelector(state => state.skillsStateField);
    const languageFields = useSelector(state => state.languageStateField);
    const togglePDF = useSelector(state => state.initialBooleanState.togglePDFValue);

    return (
        <main className={styles.main}>
            {togglePDF ? (
                <PersonalInformation />
            ) : (
                <PDFViewer style={{height: '1200px', color: '#1d3746'}}>
                    <TitleResumePage 
                        inputPersonalDataField={inputPersonalDataField} 
                        experienceFields={experienceFields} 
                        educationFields={educationFields} 
                        inputDataFields={inputDataFields} 
                        skillFields={skillFields}
                        languageFields={languageFields}
                    />
                </PDFViewer>
            )}
        </main>
    )
}

export default Main;