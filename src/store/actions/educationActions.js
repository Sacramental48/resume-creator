export const setUniversityName = (universityName, index) => ({
    type: 'SET_EDUCATION_UNIVERSITY_NAME',
    payload: { universityName, index }
});

export const setFaculty = (faculty, index) => ({
    type: 'SET_EDUCATION_FACULTY',
    payload: { faculty, index }
});

export const setFrom = (from, index) => ({
    type: 'SET_EDUCATION_FROM',
    payload: {from, index}
});

export const setTo = (to, index) => ({
    type: 'SET_EDUCATION_TO',
    payload: {to, index}
});

export const addEducationField = () => ({
    type: 'ADD_EDUCATION_FIELD'
});

export const deleteEducationField = (index) => ({
    type: 'DELETE_EDUCATION_FIELD',
    payload: index
});

export const clearAllEducationFields = () => ({
    type: 'DELETE_ALL_EDUCATION_FIELDS'
});