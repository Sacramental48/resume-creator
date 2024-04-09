import React from 'react'
import styles from './ControlsAccordion.module.css'
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";

const ControlsAccordion  = ({name, addFunction, deleteFunction, arrayValues, isOpen, setIsOpen, children}) => {
    const toggle = (e) => {
        e.stopPropagation();
        if(arrayValues.length > 0) {
            setIsOpen(!isOpen);
        }
    };

    const deleteFunc = (e) => {
        e.stopPropagation();
        deleteFunction();
    }

    React.useEffect(() => {
        if(arrayValues.length > 0) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [arrayValues]);

    return (
        <section className={styles.details}>
            <div className={`${styles.header} ${isOpen ? styles.borderBottomNone : ''}`} onClick={toggle}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.controlsContainer}>
                    <IoIosAddCircleOutline onClick={addFunction} size={30} color={'#fff'} />
                    <FaRegTrashAlt onClick={deleteFunc} size={24} color={'#fff'} />
                </div>
            </div>
            {children}
        </section>
    )
}

export default ControlsAccordion;