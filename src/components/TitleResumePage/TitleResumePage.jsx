import React from 'react';

import ResumeExperience from './TitleResumeExperience/ResumeExperience.jsx';
import ResumeReference from './TitleResumeReference/ResumeReference.jsx';
import ResumePersonal from './TitleResumePersonal/ResumePersonal.jsx';
import ResumeContact from './TitleResumePersonal/ResumeContact.jsx';
import ResumeLanguage from './TitleResumeLanguage/ResumeLanguage.jsx';
import ResumeSkill from './TitleResumeSkill/ResumeSkill.jsx';
import ResumeEducation from './TitleResumeEducation/ResumeEducation.jsx';

import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import { styles }  from './styles.js';

const TitleResumePage = ({inputPersonalDataField, experienceFields, educationFields, skillFields, languageFields, referenceFields}) => {
    
    const hasAboutMe = inputPersonalDataField.description || null;

    Font.register({ family: 'SourceSansPro', fonts: [
        { src: 'https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPw.ttf' },
        { src: 'https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rAkA.ttf', fontWeight: 600 },
    ]});

    Font.register({
        family: 'IstokWeb',
        fonts: [
            {
                src: '/Fonts/IstokWeb-Bold.ttf',
                fontWeight: 800,
            },
            {
                src: '/Fonts/IstokWeb-Regular.ttf',
                fontWeight: 400,
            },
        ]
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.info}>
                    <View style={styles.section}>
                        <ResumeContact inputPersonalDataField={inputPersonalDataField} />
                        {hasAboutMe && (
                            <View style={{marginBottom: 2}}>
                                <Text style={[styles.title, {paddingLeft: 16}]}>ABOUT ME</Text>
                                <Text style={[styles.text, {fontSize: 10, lineHeight: '1em'}]}>{inputPersonalDataField.description || '-'}</Text>
                            </View>
                        )}
                        <ResumeExperience experienceFields={experienceFields} />
                        <ResumeReference referenceFields={referenceFields} />
                    </View> 
                    <View style={styles.aside}>
                        <ResumePersonal inputPersonalDataField={inputPersonalDataField} />
                        <ResumeEducation educationFields={educationFields} />
                        <ResumeSkill skillFields={skillFields} />
                        <ResumeLanguage languageFields={languageFields} />
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default TitleResumePage;