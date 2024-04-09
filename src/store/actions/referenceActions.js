export const setReferenceName = (name, index) => ({
    type: 'SET_REFERENCE_NAME',
    payload: { name, index }
});

export const setReferenceCompanyName = (companyName, index) => ({
    type: 'SET_REFERENCE_COMPANY_NAME',
    payload: { companyName, index }
});

export const setReferencePosition = (position, index) => ({
    type: 'SET_REFERENCE_POSITION',
    payload: { position, index }
});

export const setReferencePhone = (phone, index) => ({
    type: 'SET_REFERENCE_PHONE',
    payload: { phone, index }
});

export const setReferenceEmail = (email, index) => ({
    type: 'SET_REFERENCE_EMAIL',
    payload: { email, index }
});

export const addReferenceField = () => ({
    type: 'ADD_REFERENCE_FIELD',
});

export const deleteCurrentReferenceField = (index) => ({
    type: 'DELETE_CURRENT_REFERENCE_FIELD',
    payload: index
});

export const deleteAllReferenceField = () => ({
    type: 'DELETE_ALL_REFERENCE_FIELD',
});