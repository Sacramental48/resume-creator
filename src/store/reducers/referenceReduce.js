const referenceStateField = [];

function getReferencesStateField(state = referenceStateField, action) {
    const index = action.payload?.index;
    
    switch(action.type) {
        case 'ADD_REFERENCE_FIELD':
            return [...state, {}];

        case 'DELETE_CURRENT_REFERENCE_FIELD':
            return state.filter((item, idx) => idx !== action.payload);

        case 'DELETE_ALL_REFERENCE_FIELD':
            return [];

        case 'SET_REFERENCE_NAME':
            return state.map((item, idx) => idx === index ? { ...item, name: action.payload.name } : item );
            
        case 'SET_REFERENCE_COMPANY_NAME':
            return state.map((item, idx) => idx === index ? { ...item, companyName: action.payload.companyName } : item );

        case 'SET_REFERENCE_POSITION':
            return state.map((item, idx) => idx === index ? { ...item, position: action.payload.position } : item );

        case 'SET_REFERENCE_PHONE':
            return state.map((item, idx) => idx === index ? { ...item, phone: action.payload.phone } : item );

        case 'SET_REFERENCE_EMAIL':
            return state.map((item, idx) => idx === index ? { ...item, email: action.payload.email } : item );
            
        default: 
            return state;
    }
}

export const referenceReduce = getReferencesStateField;