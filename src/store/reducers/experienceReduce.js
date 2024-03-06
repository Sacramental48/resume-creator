const experienceStateField = [];

function getExperienceStateField(state = experienceStateField, action) {
    const index = action.payload?.index;
    switch(action.type) {
        case 'ADD_EXPERIENCE_FIELD':
            return [...state, {}];

        case 'DELETE_EXPERIENCE_FIELD':
            return state.filter((experience, idx) => idx !== action.payload);

        case 'DELETE_ALL_EDUCATION_FIELDS':
            return [];

        case 'SET_EXPERIENCE_POSITION':
            return state.map((item, idx) => idx === index ? { ...item, position: action.payload.position } : item);

        case 'SET_EXPERIENCE_COMPANY':
            return state.map((item, idx) => idx === index ? { ...item, company: action.payload.company } : item);

        case 'SET_EXPERIENCE_CITY':
            return state.map((item, idx) => idx === index ? { ...item, city: action.payload.city } : item);

        case 'SET_EXPERIENCE_FROM':
            return state.map((item, idx) => idx === index ? { ...item, from: action.payload.from } : item);

        case 'SET_EXPERIENCE_TO':
            return state.map((item, idx) => idx === index ? { ...item, to: action.payload.to } : item);

        default: 
            return state;
    }
};

export const experienceReduce = getExperienceStateField;