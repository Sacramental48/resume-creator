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
    const skillFields = useSelector(state => state.skillsStateField);
    const languageFields = useSelector(state => state.languageStateField);
    const referenceFields = useSelector(state => state.referenceStateField);
    const togglePDF = useSelector(state => state.initialBooleanState.togglePDFValue);
    console.log(inputPersonalDataField);
    return (
        <main className={styles.main}>
            {togglePDF ? (
                <PersonalInformation />
            ) : (
                <PDFViewer showToolbar={false} className={styles.pdfView}>
                    <TitleResumePage 
                        inputPersonalDataField={inputPersonalDataField} 
                        experienceFields={experienceFields} 
                        educationFields={educationFields} 
                        skillFields={skillFields}
                        languageFields={languageFields}
                        referenceFields={referenceFields}
                    />
                </PDFViewer>
            )}
        </main>
    )
}

export default Main;