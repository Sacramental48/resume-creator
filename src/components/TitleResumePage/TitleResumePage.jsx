import React from 'react'
import { Phone, Email, Web, Location } from '@/components/svg/icons.jsx'
import {styles}  from './styles.js';
import { Page, Text, View, Document, Image, Font, Svg, Path } from '@react-pdf/renderer';

const TitleResumePage = ({inputPersonalDataField, experienceFields, educationFields, inputDataField}) => {
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
    })

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.info}>
                    <View style={styles.section}>
                        <View style={styles.header}>
                            <Text style={[styles.text, {fontSize: 46, fontWeight: 800, marginBottom: -10}]}>{`${inputDataField.firstName || 'Name'}`}</Text>
                            <Text style={[styles.text, {fontSize: 30}]}>{`${inputDataField.lastName || 'Surname'}`}</Text>
                            <Text style={[styles.text, {fontSize: 16}]}>{inputDataField.position || 'Position'}</Text>
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={[styles.title, {paddingLeft: 16}]}>ABOUT ME</Text>
                            <Text style={[styles.text, {fontSize: 14}]}>{inputPersonalDataField.description || '-'}</Text>
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={[styles.title, {paddingLeft: 16}]}>EXPERIENCE</Text>
                            {experienceFields.length !== 0 ? (
                                experienceFields.map((experience, index) => (
                                    <View key={index} style={{marginBottom: 15}}>
                                        <Text style={[styles.text, {fontSize: 12, opacity: .8}]}>{experience.from} - {experience.to}</Text>
                                        <View style={styles.description}>
                                            <Text style={[styles.text, {fontSize: 14, fontWeight: 600}]}>{experience.position}</Text>
                                            <Text style={[styles.text, {fontSize: 14, fontWeight: 600, marginBottom: 2}]}>{experience.company}</Text>
                                            <Text style={[styles.text, {fontSize: 10, opacity: .7}]}>{experience.accomplishments}</Text>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.text}>-</Text>
                            )}
                        </View>
                        <View>
                            <Text style={[styles.title, {paddingLeft: 16}]}>REFERENCE</Text>
                            <Text>-</Text>
                        </View>
                    </View>
                    <View style={styles.aside}>
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
                            <Text style={[styles.title, {textAlign: 'center'}]}>SKILLS</Text>
                            <Text style={[styles.text, {fontSize: 14}]}>-</Text>
                        </View>
                        <View>
                            <Text style={[styles.title, {textAlign: 'center'}]}>LANGUAGE</Text>
                            <Text style={[styles.text, {fontSize: 14}]}>-</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default TitleResumePage;