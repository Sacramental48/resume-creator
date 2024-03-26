import React from 'react'
import styles from './ControlsAccordion.module.css'
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";

const ControlsAccordion  = ({addFunction, deleteFunction, arrayValues, isOpen, setIsOpen}) => {
    return (
        <div className={styles.details} onClick={() => arrayValues.length ? setIsOpen(!isOpen) : null}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.controlsContainer}>
                <IoIosAddCircleOutline onClick={addFunction} size={30} />
                <FaRegTrashAlt onClick={deleteFunction} size={24} />
            </div>
        </div>
    )
}

export default ControlsAccordion;