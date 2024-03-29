import React, { Children } from 'react'
import styles from './ControlsAccordion.module.css'
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";

const ControlsAccordion  = ({name, addFunction, deleteFunction, arrayValues, isOpen, setIsOpen, children}) => {
    return (
        <div className={styles.details}>
            <div className={`${styles.header} ${isOpen ? styles.bottomRadiusNone : ''}`} onClick={() => arrayValues.length ? setIsOpen(!isOpen) : null}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.controlsContainer}>
                    <IoIosAddCircleOutline onClick={addFunction} size={30} />
                    <FaRegTrashAlt onClick={deleteFunction} size={24} />
                </div>
            </div>
            {children}
        </div>
    )
}

export default ControlsAccordion;