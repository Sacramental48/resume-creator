import React from 'react'
import { Phone, Email, Location } from '@/components/svg/icons.jsx'
import {styles}  from './styles.js';
import { Page, Text, View, Document, Image, Font } from '@react-pdf/renderer';

const TitleResumePage = ({inputPersonalDataField, experienceFields, educationFields, inputDataFields, skillFields, languageFields}) => {
    const hasPersonalValue = Object.values(inputPersonalDataField).some(item => item !== '');
    const hasAboutMe = inputPersonalDataField.description || null;
    const hasFirstName = inputPersonalDataField.lastName || null;
    const hasLastName = inputPersonalDataField.firstName || null;
    const hasPosition = inputPersonalDataField.position || null;

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
                        <View style={styles.header}>
                            {hasFirstName && (
                                <Text style={[styles.text, {fontSize: 46, fontWeight: 800, marginBottom: -10}]}>{`${inputDataFields.firstName || 'Name'}`}</Text>  
                            )}
                            {hasLastName && (
                                <Text style={[styles.text, {fontSize: 30}]}>{`${inputDataFields.lastName || 'Surname'}`}</Text>
                            )}
                            {hasPosition && (
                                <Text style={[styles.text, {fontSize: 16}]}>{inputDataFields.position || 'Position'}</Text>
                            )}
                        </View>
                        {hasAboutMe && (
                            <View style={{marginBottom: 10}}>
                                <Text style={[styles.title, {paddingLeft: 16}]}>ABOUT ME</Text>
                                <Text style={[styles.text, {fontSize: 14}]}>{inputPersonalDataField.description || '-'}</Text>
                            </View>
                        )}
                        
                        <View style={{marginBottom: 10}}>
                            {experienceFields.length !== 0 && (
                                <>
                                    <Text style={[styles.title, {paddingLeft: 16}]}>EXPERIENCE</Text>
                                    {experienceFields.map((experience, index) => {
                                        <View key={index} style={{marginBottom: 15}}>
                                            <Text style={[styles.text, {fontSize: 12, opacity: .8}]}>{experience.from} - {experience.to}</Text>
                                            <View style={styles.description}>
                                                <Text style={[styles.text, {fontSize: 14, fontWeight: 600}]}>{experience.position}</Text>
                                                <Text style={[styles.text, {fontSize: 14, fontWeight: 600, marginBottom: 2}]}>{experience.company}</Text>
                                                <Text style={[styles.text, {fontSize: 10, opacity: .7}]}>{experience.accomplishments}</Text>
                                            </View>
                                        </View>
                                    })}
                                </>
                            )}
                        </View>
                        <View>
                            <Text style={[styles.title, {paddingLeft: 16}]}>REFERENCE</Text>
                            <Text>-</Text>
                        </View>
                    </View>
                    <View style={styles.aside}>
                        {hasPersonalValue && (
                            <>
                                <Image src={inputPersonalDataField.photo || '/img/default-avatar.png'} alt='avatar' style={styles.image} />
                                <View>
                                    <Text style={[styles.title, {textAlign: 'center'}]}>CONTACT</Text>
                                    {inputPersonalDataField.phoneNumber.length !== 0 && (
                                        <View style={styles.contact}>
                                            <Phone />
                                            <Text style={[styles.text, {fontSize: 10}]}>{inputPersonalDataField.phoneNumber || '-'}</Text>
                                        </View>
                                    )}
                                    {inputPersonalDataField.address.length !== 0 && (
                                        <View style={styles.contact}>
                                            <Email />
                                            <Text style={[styles.text, {fontSize: 10}]}>{inputPersonalDataField.address || '-'}</Text>
                                        </View>
                                    )}
                                    {/* {inputPersonalDataField.web.length !== 0 && (
                                        <View style={styles.contact}>
                                            <Web />
                                            <Text style={[styles.text, {fontSize: 10}]}>-</Text>
                                        </View>
                                    )} */}
                                    {inputPersonalDataField.email.length !== 0 && (
                                        <View style={styles.contact}>
                                            <Location />
                                            <Text style={[styles.text, {fontSize: 10}]}>{inputPersonalDataField.email || '-'}</Text>
                                        </View>
                                    )}
                                </View>
                            </>
                        )}
                        <View style={{marginBottom: 10}}>
                            {educationFields.length !== 0 && (
                                <>
                                    <Text style={[styles.title, {textAlign: 'center'}]}>EDUCATION</Text>
                                    {educationFields.map((education, index) => (
                                        <View key={index} style={{marginBottom: 10}}>
                                            <View style={styles.description}>
                                                <Text style={[styles.text, {fontSize: 12}]}>{education.faculty}</Text>
                                                <Text style={[styles.text, {fontSize: 14}]}>{education.universityName}</Text>
                                            </View>
                                            <Text style={[styles.text, {fontSize: 12, opacity: .6}]}>{education.from} - {education.to}</Text>
                                        </View>
                                    ))}
                                </>
                            )}
                        </View>
                        <View style={{marginBottom: 10}}>
                            {skillFields.length !== 0 && (
                                <>
                                    <Text style={[styles.title, {textAlign: 'center'}]}>SKILLS</Text>
                                    {skillFields.map((skill, index) => {
                                        return (
                                            <View style={styles.skills} key={index}>
                                                <Text style={[styles.text, {fontSize: 12, fontWeight: 800}]}>{skill.skillName}:</Text>
                                                <View style={{width: '50%', height: 6, border: '0.4px solid black', borderRadius: 24}}>
                                                    {skill && skill.skillLevel !== undefined && (
                                                        <Text style={[styles.lineSkill, {width: `${skill.skillLevel}%`}]}></Text>
                                                    )}
                                                </View>
                                            </View>
                                        )
                                    })}
                                </>
                            )}
                        </View>
                        <View>
                            {languageFields.length !== 0 && (
                                <>
                                    <Text style={[styles.title, {textAlign: 'center'}]}>LANGUAGE</Text>
                                    {languageFields.map((lang, index) => {
                                        return (
                                            <View key={index} style={styles.lang}>
                                                {lang.inputField && (
                                                    <>
                                                        <Text style={[styles.text, {fontSize: 12}]}>{lang.inputField}: </Text>
                                                        <Text style={[styles.text, {fontSize: 12}]}>{lang.level}</Text>
                                                    </>
                                                )}
                                            </View>
                                        )
                                    })}
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default TitleResumePage;