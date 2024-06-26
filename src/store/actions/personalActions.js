export const setFirstName = (firstName) => ({
    type: 'SET_FIRST_NAME',
    payload: firstName
});
  

export const setLastName = (lastName) => ({
    type: 'SET_LAST_NAME',
    payload: lastName
});
  
export const setPosition = (position) => ({
    type: 'SET_POSITION',
    payload: position
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

export const clearPersonalField = () => ({
    type: 'CLEAR_PERSONAL_FIELD'
});