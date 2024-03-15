import React from 'react';
import { useSelector } from 'react-redux';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const TitleResumeMain = ({inputPersonalDataField, experienceFields, educationFields, inputDataField}) => {
    // const inputPersonalDataField = useSelector(state => state.personalField);
    // const experienceFields = useSelector(state => state.experienceStateField);
    // const educationFields = useSelector(state => state.educationStateField);
    // const inputDataField = useSelector(state => state.personalField);
    console.log(inputDataField);
    const styles = StyleSheet.create({
            page: {
                height: '1000px',
                width: '20px'
            },
            view: {
                flexDirection: 'row',
                backgroundColor: '#1d3746',
                color: '#fff',
                height: '120px',
            },
            section: {
                margin: 10,
                padding: 10,
                flexGrow: 1
            }
        });

    // return (
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.view}>
                        <Text>{`${inputDataField.firstName || 'Name'} ${inputDataField.lastName || 'Last Name'}`}</Text>
                    </View>
                </Page>
            </Document>
        )

        // <div className={styles.header}>
        //     <span className={styles.headerName}>{`${inputDataField.firstName || 'Name'} ${inputDataField.lastName || 'Last Name'}`}</span>
        //     <p className={styles.headerTitle}>{inputDataField.title || 'Title'}</p>
        // </div>
        // <div className={styles.info}>
            {/* <section className={styles.section}>
                <>
                    <span className={styles.title}>Description</span>
                    <p>{inputPersonalDataField.description || '-'}</p>
                </>
                <>
                    <span className={styles.title}>Experience</span>
                    {experienceFields.length !== 0 ? (
                        experienceFields.map((experience, index) => (
                            <div key={index} className={styles.body}>
                                <span>{experience.from} - {experience.to}</span>
                                <div className={styles.description}>
                                    <p>{experience.position}</p>
                                    <p>{experience.company}</p>
                                    <p>{experience.city}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>-</p>
                    )}
                </>
                <>
                    <span className={styles.title}>Education</span>
                    {educationFields.length !== 0 ? (
                        educationFields.map((education, index) => (
                            <div key={index} className={styles.body}>
                                <span>{education.from} - {education.to}</span>
                                <div className={styles.description}>
                                    <p>{education.universityName}</p>
                                    <p>{education.city}</p>
                                    <p>{education.degree}</p>
                                    <p>{education.subject}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>-</p>
                    )}
                </>
            </section>
            <aside className={styles.aside}>
                <img src={inputPersonalDataField.photo || '/img/default-avatar.png'} alt={inputPersonalDataField.photo} />
                <div className={styles.asideBody}>
                    <span>Personal Details</span>
                    <address>
                        <p>City</p>
                        <span>{inputPersonalDataField.address || '-'}</span>
                        <p>Number</p>
                        <span>{inputPersonalDataField.phoneNumber || '-'}</span>
                        <p>Email</p>
                        <span>{inputPersonalDataField.email || '-'}</span>
                    </address>
                </div>
            </aside>
        </div> */}
    // );
};

export default TitleResumeMain;