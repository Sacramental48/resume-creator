const personalField = {
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: ''
};
        
function getPersonalField(state = personalField, action) {
    switch(action.type) {
        case 'SET_FIRST_NAME':
            return {
                ...state,
                firstName: action.payload
            };
        
        case 'SET_LAST_NAME':
            return {
                ...state,
                lastName: action.payload 
            };

        case 'SET_TITLE':
            return {
                ...state,
                title: action.payload
            };

        case 'SET_PHOTO':
            return {
                ...state,
                photo: action.payload
            };
        
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.payload
            };
        case 'SET_PHONE_NUMBER':
            return {
                ...state,
                phoneNumber: action.payload
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            };
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.payload
            };
        default: 
            return state;
    }
};

export const mainFieldReduce = getPersonalField;