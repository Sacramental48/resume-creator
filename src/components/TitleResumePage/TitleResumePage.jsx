import React from 'react'
import Montserrat from '/Fonts/Montserrat-VariableFont_wght.ttf'
import { Page, Text, View, Document, Image, Font, StyleSheet } from '@react-pdf/renderer';

const TitleResumePage = ({inputPersonalDataField, experienceFields, educationFields, inputDataField}) => {
    const styles = StyleSheet.create({
        header: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '40px 0 16px 0',
        },
        info: {
            display: 'flex',
            position: 'relative',
            flexDirection: 'row-reverse',
            height: '100%',
        },
        section: {
            gap: 20,
            width: '65%',
            padding: '0 20px 0 30px',
        },
        description: {
            display: 'flex',
            flexDirection: 'column',
        },
        body: {
            display: 'flex',
            marginLeft: 10
        },
        aside: {
            display: 'flex',
            flexDirection: 'column',
            width: '35%',
            backgroundColor: '#ececec',
            padding: '20px 15px 0 15px',
        },
        image: {
            width: '100%',
            height: 160,
            margin: '0 auto',
            marginBottom: 12,
        },
        title: {
            color: '#1d3746',
            fontSize: 20,
            paddingBottom: 6,
            marginBottom: 10,
            borderBottom: '0.6px solid gray'
        },
        text: {
            color: '#1d3746'
        }
    });

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
                            <Text style={[styles.text, {fontSize: 46, fontWeight: 800}]}>{`${inputDataField.firstName || 'Name'}`}</Text>
                            <Text style={[styles.text, {fontSize: 30}]}>{`${inputDataField.lastName || 'Surname'}`}</Text>
                            <Text style={[styles.text, {fontSize: 16}]}>{inputDataField.title || 'Position'}</Text>
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={styles.title}>About Me</Text>
                            <Text style={[styles.text, {fontSize: 14}]}>{inputPersonalDataField.description || '-'}</Text>
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={styles.title}>Experience</Text>
                            {experienceFields.length !== 0 ? (
                                experienceFields.map((experience, index) => (
                                    <View key={index} style={styles.body}>
                                        <Text style={[styles.text, {fontSize: 12, marginBottom: 6}]}>{experience.from}2020 - 2023{experience.to}</Text>
                                        <View style={styles.description}>
                                            <Text style={[styles.text, {fontSize: 16, fontWeight: 600}]}>{experience.position}</Text>
                                            <Text style={[styles.text, {fontSize: 16, fontWeight: 600, marginBottom: 6}]}>{experience.company}</Text>
                                            <Text style={[styles.text, {fontSize: 12, opacity: .7}]}>{experience.accomplishments}</Text>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.text}>-</Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.title}>Reference</Text>
                            <Text>-</Text>
                        </View>
                    </View>
                    <View style={styles.aside}>
                        <Image src={inputPersonalDataField.photo || '/img/default-avatar.png'} alt={inputPersonalDataField.photo} style={styles.image} />
                        <View>
                            <Text style={styles.title}>Contact</Text>
                            <Text style={[styles.text, {marginBottom: 10, fontSize: 10}]}>{inputPersonalDataField.phoneNumber || '-'}</Text>
                            <Text style={[styles.text, {marginBottom: 10, fontSize: 10}]}>{inputPersonalDataField.address || '-'}</Text>
                            <Text style={[styles.text, {marginBottom: 10, fontSize: 10}]}>{inputPersonalDataField.email || '-'}</Text>
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={styles.title}>Education</Text>
                            {educationFields.length !== 0 ? (
                                educationFields.map((education, index) => (
                                    <View key={index} style={styles.body}>
                                        <View style={styles.description}>
                                            <Text style={[styles.text, {fontSize: 12}]}>{education.faculty}</Text>
                                            <Text style={[styles.text, {fontSize: 14}]}>{education.universityName}</Text>
                                        </View>
                                        <Text style={[styles.text, {fontSize: 12, opacity: .6}]}>{education.from} - {education.to}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>-</Text>
                            )}
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={styles.title}>Skills</Text>
                            <Text style={[styles.text, {fontSize: 14}]}>-</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Language</Text>
                            <Text style={[styles.text, {fontSize: 14}]}>-</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default TitleResumePage;