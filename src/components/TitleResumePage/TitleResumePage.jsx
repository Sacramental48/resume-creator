import React from 'react'
// import TitleResumeHeader from './Header/TitleResumeHeader.jsx'
import TitleResumeMain from './Main/TitleResumeMain.jsx'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { useSelector } from 'react-redux';

const TitleResumePage = () => {
    const inputPersonalDataField = useSelector(state => state.personalField);
    const experienceFields = useSelector(state => state.experienceStateField);
    const educationFields = useSelector(state => state.educationStateField);
    const inputDataField = useSelector(state => state.personalField);

    return (
        <>
            {/* <TitleResumeHeader /> */}
            <PDFViewer>
                <TitleResumeMain 
                    inputPersonalDataField={inputPersonalDataField} 
                    experienceFields={experienceFields} 
                    educationFields={educationFields} 
                    inputDataField={inputDataField} 
                />
            </PDFViewer>
            <PDFDownloadLink document={<TitleResumeMain  inputPersonalDataField={inputPersonalDataField} 
                    experienceFields={experienceFields} 
                    educationFields={educationFields} 
                    inputDataField={inputDataField} />} fileName='FORM'>
                {({loading, error}) => (loading ? <button>Loading Document</button> : <button>downLoad</button>)}
            </PDFDownloadLink>
        </>
    )
}

export default TitleResumePage;