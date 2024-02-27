import React from 'react'
import styles from './Input.module.css'
const CustomInput = ({...props}) => {
    return (
        <input 
            type={props.type}
            value={props.value}
            onChange={props.onChange} 
            placeholder={props.placeholder}
            className={styles.inputModule || className} 
            name={props.name}
        />
    )
}

export default CustomInput;