import React from 'react';
import ControlsAccordion from '../Reusable/ReusableAcardionControls/ControlsAccordion';
import CustomInput from '@/components/UI/Input/Input.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setReferenceName, setReferenceCompanyName, setReferencePosition, setReferencePhone, setReferenceEmail, addReferenceField, deleteCurrentReferenceField, deleteAllReferenceField } from '@/store/actions/referenceActions.js';
import { getBooleanValue } from '@/store/actions/booleanAction.js';
import styles from './Reference.module.css';

const Reference = () => {
    const [referenceField, setReferenceField] = React.useState([]);
    const [isOpenReference, setIsOpenReference] = React.useState(false);
    
    const toggleBooleanValue = useSelector(state => state.initialBooleanState.booleanValue)

    const dispatch = useDispatch();

    const createReferenceField = (e) => {
        e.stopPropagation();
        const id = {id: Date.now()};
        setReferenceField([...referenceField, id]);
        dispatch(addReferenceField());
        dispatch(getBooleanValue(false));
    };

    const deleteAllFields = () => {
        setReferenceField([]);
        dispatch(deleteAllReferenceField());
    };

    const getInputValues = (e) => {
        const {name, value} = e.target;
        const idx = +e.target.dataset.index;

        switch(name) {
            case `name-${idx}`:
                dispatch(setReferenceName(value, idx));
                break;
            case `companyName-${idx}`:
                dispatch(setReferenceCompanyName(value, idx));
                break;
            case `position-${idx}`:
                dispatch(setReferencePosition(value, idx));
                break;
            case `phone-${idx}`:
                dispatch(setReferencePhone(value, idx));
                break;
            case `email-${idx}`:
                dispatch(setReferenceEmail(value, idx));
                break;
            default:
                break;
        }
        
    };

    React.useEffect(() => {
        if(toggleBooleanValue) {
            setReferenceField([]);
            dispatch(deleteAllReferenceField());
        }
    }, [toggleBooleanValue]);

    return (
        <ControlsAccordion
            name={'References'}
            isOpen={isOpenReference}
            setIsOpen={setIsOpenReference}
            arrayValues={referenceField}
            addFunction={createReferenceField}
            deleteFunction={deleteAllFields}
        >
            {isOpenReference && (
                <fieldset className={styles.content}>
                    {referenceField.map((reference, index) => (
                        <div key={reference.id} className={styles.referenceForm}>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputName}>
                                    <CustomInput type="text" name={`name-${index}`} data-index={index} placeholder="Enter name" onChange={getInputValues} />
                                </div>
                                <div className={styles.inputCompany}>
                                    <CustomInput type="text" name={`companyName-${index}`} data-index={index} placeholder="Enter company name" onChange={getInputValues} />
                                </div>
                                <div className={styles.inputPosition}>
                                    <CustomInput type="text" name={`position-${index}`} data-index={index} placeholder="Enter Job Title" onChange={getInputValues} />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputPhone}>
                                    <CustomInput type="tel" name={`phone-${index}`} data-index={index} placeholder="Enter phone number" onChange={getInputValues} />
                                </div>
                                <div className={styles.inputEmail}>
                                    <CustomInput type="email" name={`email-${index}`} data-index={index} placeholder="Enter email address" onChange={getInputValues} />
                                </div>
                            </div>
                        </div>
                    ))}
                </fieldset>
            )}
        </ControlsAccordion>
    )
}

export default Reference;