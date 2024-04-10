const languageStateField = [];

function getLanguageStateFields(state = languageStateField, action) {
    const index = action.payload?.index;
    
    switch(action.type) {
        case 'ADD_LANGUAGE_FIELD':
            return [...state, {}];

        case 'DELETE_CURRENT_LANGUAGE_FIELD':
            return state.filter((item, idx) => idx !== action.payload);

        case 'DELETE_ALL_LANGUAGE_FIELDS':
            return [];

        case 'SET_INPUTFIELD':
            return state.map((item, idx) => idx === index ? { ...item, inputField: action.payload.inputField } : item );

        case 'SET_BEGINNER':
            return state.map((item, idx) => idx === index ? { ...item, level: action.payload.begginer } : item);

        case 'SET_ELEMENTARY':
            return state.map((item, idx) => idx === index ? { ...item, level: action.payload.elementary } : item);

        case 'SET_INTERMEDIATE':
            return state.map((item, idx) => idx === index ? { ...item, level: action.payload.intermediate } : item);

        case 'SET_Upper_INTERMEDIATE':
            return state.map((item, idx) => idx === index ? { ...item, level: action.payload.upperIntermediate } : item);

        case 'SET_ADVANCED':
            return state.map((item, idx) => idx === index ? { ...item, level: action.payload.advanced } : item);

        case 'SET_MASTERY':
            return state.map((item, idx) => idx === index ? { ...item, level: action.payload.mastery } : item);
                                                        
        default: 
            return state;
    };
}

export const languageReduce = getLanguageStateFields;