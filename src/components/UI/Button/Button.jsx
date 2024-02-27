import React from 'react'
import styles from './Button.module.css'

const Button = ({...props }) => {
    const className = `${styles.button} ${styles[props.color]}`;

    return (
        <button 
            className={className}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Button;