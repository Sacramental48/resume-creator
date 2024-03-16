import React from 'react'
import PersonalInformation from '../PersonalInformation/PersonalInformation.jsx'
import TitleResumePage from '../TitleResumePage/TitleResumePage'
import styles from './Main.module.css'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { useSelector } from 'react-redux';

const Main = () => {
    const inputPersonalDataField = useSelector(state => state.personalField);
    const experienceFields = useSelector(state => state.experienceStateField);
    const educationFields = useSelector(state => state.educationStateField);
    const inputDataField = useSelector(state => state.personalField);
    return (
        <main className={styles.main}>
            <PersonalInformation />
            <PDFViewer style={{height: '1200px', color: '#1d3746'}}>
                <TitleResumePage 
                    inputPersonalDataField={inputPersonalDataField} 
                    experienceFields={experienceFields} 
                    educationFields={educationFields} 
                    inputDataField={inputDataField} 
                />
            </PDFViewer>
            <PDFDownloadLink document={<TitleResumePage  inputPersonalDataField={inputPersonalDataField} 
                    experienceFields={experienceFields} 
                    educationFields={educationFields} 
                    inputDataField={inputDataField} />} fileName='FORM'>
                {({loading, error}) => (loading ? <button>Loading Document</button> : <button>Download</button>)}
            </PDFDownloadLink>
        </main>
    )
}

export default Main;