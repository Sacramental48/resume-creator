import React from 'react';
import styles from './Input.module.css';

const CustomInput = ({...props }) => {
    return (
        <input 
            {...props}
            className={`${styles.inputModule} ${props.className}`} 
        />
    );
};

export default CustomInput;
