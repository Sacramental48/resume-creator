import React from 'react';
import Montserrat from '/Fonts/Montserrat-VariableFont_wght.ttf'
import { Page, Text, View, Document, Image, Font, StyleSheet } from '@react-pdf/renderer';

const TitleResumeMain = ({inputPersonalDataField, experienceFields, educationFields, inputDataField}) => {
    console.log(inputPersonalDataField);
    const styles = StyleSheet.create({
            header: {
                display: 'flex',
                flexDirection: 'column',
                // gap: 20,
                width: '100%',
                padding: '40px 0',
                color: '#000',
            },
            info: {
                display: 'flex',
                position: 'relative',
                flexDirection: 'row-reverse',
                height: '100%',
            },
            section: {
                gap: 20,
                width: '70%',
                padding: '0 20px 0 30px',
            },
            description: {
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            },
            body: {
                display: 'flex',
                gap: 30,
            },
            aside: {
                display: 'flex',
                flexDirection: 'column',
                width: '30%',
                backgroundColor: '#ececec',
                padding: '20px 10px 0 10px',
            },
            image: {
                width: '100%',
                height: 160,
                margin: '0 auto',
                marginBottom: 12,
            },
            title: {
                color: '#1d3746',
                paddingBottom: 6,
                marginBottom: 10,
                borderBottom: '0.6px solid gray'
            }
            
        });

        Font.register({
            family: 'MontserratAlternates',
            src: Montserrat
        })
        Font.register({ family: 'SourceSansPro', fonts: [
            { src: 'https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPw.ttf' },
            { src: 'https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rAkA.ttf', fontWeight: 600 },
           ]});

        return (
            <Document style={{fontFamily: 'SourceSansPro'}}>
                <Page size="A4">
                    <View style={styles.info}>
                        <View style={styles.section}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 46}}>{`${inputDataField.firstName || 'Name'}`}</Text>
                                <Text style={{fontSize: 30}}>{`${inputDataField.lastName || 'Last Name'}`}</Text>
                                <Text style={{fontSize: 16}}>{inputDataField.title || 'Title'}</Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.title}>About Me</Text>
                                <Text>{inputPersonalDataField.description || '-'}</Text>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <Text style={styles.title}>Experience</Text>
                                {experienceFields.length !== 0 ? (
                                    experienceFields.map((experience, index) => (
                                        <View key={index} style={styles.body}>
                                            <Text>{experience.from} - {experience.to}</Text>
                                            <View style={styles.description}>
                                                <Text>{experience.position}</Text>
                                                <View style={{display: 'flex', flexDirection: 'row'}}>
                                                    <Text style={{paddingRight: 10, borderRight: '1px solid black'}}>{experience.company}</Text>
                                                    <Text style={{paddingLeft: 10}}>{experience.city}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                ) : (
                                    <Text>-</Text>
                                )}
                            </View>
                            <View>
                            <Text style={styles.title}>Reference</Text>
                            </View>
                        </View>
                        <View style={styles.aside}>
                            <Image src={inputPersonalDataField.photo || '/img/default-avatar.png'} alt={inputPersonalDataField.photo} style={styles.image} />
                            <View>
                                <Text style={styles.title}>Contact</Text>
                                <Text style={{marginBottom: 10}}>{inputPersonalDataField.phoneNumber || '-'}</Text>
                                <Text style={{marginBottom: 10}}>{inputPersonalDataField.address || '-'}</Text>
                                <Text style={{marginBottom: 10}}>{inputPersonalDataField.email || '-'}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Education</Text>
                                {educationFields.length !== 0 ? (
                                    educationFields.map((education, index) => (
                                        <View key={index} style={styles.body}>
                                            <Text>{education.from} - {education.to}</Text>
                                            <View style={styles.description}>
                                                <Text>{education.universityName}</Text>
                                                <Text>{education.city}</Text>
                                                <Text>{education.degree}</Text>
                                                <Text>{education.subject}</Text>
                                            </View>
                                        </View>
                                    ))
                                ) : (
                                    <Text>-</Text>
                                )}
                            </View>
                            <View>
                                <Text style={styles.title}>Skills</Text>
                                <Text>-</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Language</Text>
                                <Text>-</Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        )
};

export default TitleResumeMain;