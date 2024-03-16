const educationStateField = [];

function getEducationStateField(state = educationStateField, action) {
    const index = action.payload?.index;
    switch(action.type) {
        case 'ADD_EDUCATION_FIELD':
            return [...state, {}];

        case 'DELETE_EDUCATION_FIELD':
            return state.filter((experience, idx) => idx !== action.payload);

        case 'DELETE_ALL_EDUCATION_FIELDS':
            return [];

        case 'SET_EDUCATION_UNIVERSITY_NAME':
            return state.map((item, idx) => idx === index ? { ...item, universityName: action.payload.universityName } : item);

        case 'SET_EDUCATION_FACULTY':
            return state.map((item, idx) => idx === index ? { ...item, faculty: action.payload.faculty } : item);

        case 'SET_EDUCATION_FROM':
            return state.map((item, idx) => idx === index ? { ...item, from: action.payload.from } : item);

        case 'SET_EDUCATION_TO':
            return state.map((item, idx) => idx === index ? { ...item, to: action.payload.to } : item);

        default:
            return state;
    }

}

export const educationReduce = getEducationStateField;