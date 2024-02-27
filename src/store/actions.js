export const setFirstName = (firstName) => ({
    type: 'SET_FIRST_NAME',
    payload: firstName
});
  

export const setLastName = (lastName) => ({
    type: 'SET_LAST_NAME',
    payload: lastName
});
  
export const setTitle = (title) => ({
    type: 'SET_TITLE',
    payload: title
});
  
export const setPhoto = (photo) => ({
    type: 'SET_PHOTO',
    payload: photo
});

export const setAddress= (address) => ({
    type: 'SET_ADDRESS',
    payload: address
});

export const setPhoneNumber = (phoneNumber) => ({
    type: 'SET_PHONE_NUMBER',
    payload: phoneNumber
});

export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email
});

export const setDescription = (description) => ({
    type: 'SET_DESCRIPTION',
    payload: description
});

export const setPosition = (position, id) => ({
    type: 'SET_POSITION',
    payload: {position, id}
});

export const setCompany = (company, id) => ({
    type: 'SET_COMPANY',
    payload: {company, id}
});

export const setCity = (city, id) => ({
    type: 'SET_CITY',
    payload: {city, id}
});

export const setFrom = (from, id) => ({
    type: 'SET_FROM',
    payload: {from, id}
});

export const setTo = (to, id) => ({
    type: 'SET_TO',
    payload: {to, id}
});

export const addExperienceField = () => ({
    type: 'ADD_EXPERIENCE_FIELD'
});

export const deleteExperienceField = (id) => ({
    type: 'DELETE_EXPERIENCE_FIELD',
    payload: id
});