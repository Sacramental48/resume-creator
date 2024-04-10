import React, { useState, useEffect, useRef } from 'react';
import styles from './ControlsAccordion.module.css';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";

const ControlsAccordion = ({ name, addFunction, deleteFunction, arrayValues, isOpen, setIsOpen, children }) => {
    const [contentHeight, setContentHeight] = useState('0px');
    const contentRef = useRef(null);

    const toggle = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const deleteFunc = (e) => {
        e.stopPropagation();
        deleteFunction();
    }

    useEffect(() => {
        if(arrayValues.length > 0) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [arrayValues]);

    useEffect(() => {
        if (isOpen) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setContentHeight('0px');
        }
    }, [isOpen, children]);

    return (
        <section className={styles.details}>
            <div className={`${styles.header} ${isOpen ? styles.borderBottomNone : ''}`} onClick={toggle}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.controlsContainer}>
                    <IoIosAddCircleOutline onClick={addFunction} size={30} color={'#fff'} />
                    <FaRegTrashAlt onClick={deleteFunc} size={24} color={'#fff'} />
                </div>
            </div>
            <div 
                className={styles.fieldset}
                style={{ maxHeight: `${isOpen ? contentHeight : '0px'}`, transition: 'max-height 0.6s ease-out' }}
            >
               <div ref={contentRef} id="accordion-content">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default ControlsAccordion;