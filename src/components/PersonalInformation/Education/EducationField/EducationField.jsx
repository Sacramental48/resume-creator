import React from 'react'
import CustomInput from '@/components/UI/Input/Input.jsx'
import Button from '@/components/UI/Button/Button.jsx'
import styles from './EducationField.module.css'

const EducatioField = ({...props}) => {
    const [universityName, setUniversityName] = React.useState('');
    const [city, setCity] = React.useState('');
    const [degree, setDegree] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');

    return (
        <section className={styles.educationField}>
            <CustomInput type="text" value={universityName} onChange={e => setUniversityName(e.target.value)} placeholder="Position" />
            <CustomInput type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
            <CustomInput type="text" value={degree} onChange={e => setDegree(e.target.value)} placeholder="Company" />
            <CustomInput type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Company" />
            <CustomInput type="text" value={from} onChange={e => setFrom(e.target.value)} placeholder="From (year)" />
            <CustomInput type="text" value={to} onChange={e => setTo(e.target.value)} placeholder="To (year)" />
            <Button text="Delete" color="delete" onClick={() => props.onDelete(props.id)}></Button>
        </section>
    )
}

export default EducatioField;