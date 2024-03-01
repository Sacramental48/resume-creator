export const setPosition = (position, index) => ({
    type: 'SET_POSITION',
    payload: {position, index},
    
});

export const setCompany = (company, index) => ({
    type: 'SET_COMPANY',
    payload: {company, index}
});

export const setCity = (city, index) => ({
    type: 'SET_CITY',
    payload: {city, index}
});

export const setFrom = (from, index) => ({
    type: 'SET_FROM',
    payload: {from, index}
});

export const setTo = (to, index) => ({
    type: 'SET_TO',
    payload: {to, index}
});

export const addExperienceField = () => ({
    type: 'ADD_EXPERIENCE_FIELD'
});

export const deleteExperienceField = (index) => ({
    type: 'DELETE_EXPERIENCE_FIELD',
    payload: {index}
});