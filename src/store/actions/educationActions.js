export const setUniversityName = (universityName, index) => ({
    type: 'SET_EDUCATION_UNIVERSITY_NAME',
    payload: { universityName, index }
});

export const setCity = (city, index) => ({
    type: 'SET_EDUCATION_CITY',
    payload: { city, index }
});

export const setDegree = (degree, index) => ({
    type: 'SET_EDUCATION_DEGREE',
    payload: { degree, index }
});

export const setSubject = (subject, index) => ({
    type: 'SET_EDUCATION_SUBJECT',
    payload: { subject, index }
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