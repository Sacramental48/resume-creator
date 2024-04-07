import React from 'react';
import ControlsAccordion from '../Reusable/ReusableAcardionControls/ControlsAccordion';
import CustmInput from '@/components/UI/Input/Input.jsx';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { setInputField, setBeginner, setElementary, setIntermediate, setUpperIntermediate, setAdvanced, setMastery, addNewLangField, deleteCurrentLangField, deleteAllLangFields } from '@/store/actions/languageActions';
import { getBooleanValue } from '@/store/actions/booleanAction.js';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Language.module.css';

const LanguageLevel = () => {
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue)

    const [langFieldsValue, setLangFieldsValue] = React.useState([]);
    const [isOpenLanguage, setIsOpenLanguage] = React.useState(false);

    const dispatch = useDispatch();

    const getInputValue = (e) => {
        const { value } = e.target;
        const index = Number(e.target.dataset.index);

        dispatch(setInputField(value, index));
    };
    
    const getRadioValue = (e) => {
        const { value } = e.target;
        const index = Number(e.target.dataset.index);

        switch(value) {
            case `inputField-${index}`: 
                dispatch(setInputField(value, index));
                break;

            case 'Beginner(A1)':
                dispatch(setBeginner(value, index));
                break;

            case 'Elementary(A2)':
                dispatch(setElementary(value, index));
                break;

            case 'Intermediate(B1)':
                dispatch(setIntermediate(value, index));
                break;

            case 'Upper-intermediate(B2)':
                dispatch(setUpperIntermediate(value, index));
                break;

            case 'Advanced(C1)':
                dispatch(setAdvanced(value, index));
                break;

            case 'Mastery(C2)':
                dispatch(setMastery(value, index));
                break;

            default:
                break;
        }
    };

    const addLangField = (e) => {
        e.stopPropagation();
        const id = { id: Date.now() };
        setLangFieldsValue([...langFieldsValue, id]);
        dispatch(addNewLangField());
        dispatch(getBooleanValue(false));
        setIsOpenLanguage(true);
    };

    function deleteLanguageField(_, index) {
        const updatedLanguageFields = langFieldsValue.filter((_, idx) => idx !== index);
        setLangFieldsValue(updatedLanguageFields);
        dispatch(deleteCurrentLangField(index));
    };

    function deleteAllFields() {
        setLangFieldsValue([]);
        dispatch(deleteAllLangFields());
    };

    React.useEffect(() => {
        if(!langFieldsValue.length) {
            setIsOpenLanguage(false)
        }
    }, [langFieldsValue]);

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setLangFieldsValue([]);
            dispatch(deleteAllLangFields());
        }
    }, [toggleBooleanValue]);

    return (
        <ControlsAccordion 
            name={'Languages'}
            isOpen={isOpenLanguage}
            setIsOpen={setIsOpenLanguage}
            arrayValues={langFieldsValue}
            addFunction={addLangField}
            deleteFunction={deleteAllFields}

        >
            {isOpenLanguage && (
                <fieldset className={styles.content}>
                    {langFieldsValue.map((field, index) => (
                        <div key={field.id} className={styles.languageField}>
                            <div className={styles.inputField}>
                                <CustmInput type="text" className={styles.input} name={`inputField-${index}`} placeholder={'Language name'} data-index={index} onChange={getInputValue} />
                                <FaRegTrashAlt onClick={() => deleteLanguageField(field.id, index)} size={24} />
                            </div>
                            <div className={styles.fieldset}>
                                <div className={styles.option}>
                                    <div className={styles.optionItem}>
                                        <CustmInput type="radio" id={`a1-${index}`} name={`level-${index}`} value="Beginner(A1)" data-index={index} onChange={getRadioValue} />
                                        <label htmlFor={`a1-${index}`} className={styles.label}>A1 (Beginner)</label>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <CustmInput type="radio" id={`a2-${index}`} name={`level-${index}`} value="Elementary(A2)" data-index={index} onChange={getRadioValue} />
                                        <label htmlFor={`a2-${index}`} className={styles.label}>A2 (Elementary)</label>
                                    </div>
                                </div>
                                <div className={styles.option}>
                                    <div className={styles.optionItem}>
                                        <CustmInput type="radio" id={`b1-${index}`} name={`level-${index}`} value="Intermediate(B1)" data-index={index} onChange={getRadioValue} />
                                        <label htmlFor={`b1-${index}`} className={styles.label}>B1 (Intermediate)</label>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <CustmInput type="radio" id={`b2-${index}`} name={`level-${index}`} value="Upper-intermediate(B2)" data-index={index} onChange={getRadioValue} />
                                        <label htmlFor={`b2-${index}`} className={styles.label}>B2 (Upper-intermediate)</label>
                                    </div>
                                </div>
                                <div className={styles.option}>
                                    <div className={styles.optionItem}>
                                        <CustmInput type="radio" id={`c1-${index}`} name={`level-${index}`} value="Advanced(C1)" data-index={index} onChange={getRadioValue} />
                                        <label htmlFor={`c1-${index}`} className={styles.label}>C1 (Advanced)</label>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <CustmInput type="radio" id={`c2-${index}`} name={`level-${index}`} value="Mastery(C2)" data-index={index} onChange={getRadioValue} />
                                        <label htmlFor={`c2-${index}`} className={styles.label}>C2 (Mastery)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </fieldset>
            )}  
        </ControlsAccordion>
    )
}

export default LanguageLevel;