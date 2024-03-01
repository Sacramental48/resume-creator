import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TitleResumeMain.module.css';

const TitleResumeMain = () => {
    const inputPersonalDataField = useSelector(state => state.personalField);
    const experienceFields = useSelector(state => state.experienceStateField);
    const experienceFieldsToObj = Object.values(experienceFields);

    return (
        <div className={styles.info}>
            <section className={styles.section}>
                <>
                    <span className={styles.title}>Description</span>
                    <p>{inputPersonalDataField.description || '-'}</p>
                </>
                <>
                    <span className={styles.title}>Experience</span>
                    {experienceFieldsToObj.length !== 0 ? (
                        experienceFieldsToObj.map((experience, index) => (
                            <div key={index} className={styles.experienceBody}>
                                <span>{experience.from} - {experience.to}</span>
                                <div className={styles.experienceDescription}>
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
                    <p>-</p>
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
        </div>
    );
};

export default TitleResumeMain;