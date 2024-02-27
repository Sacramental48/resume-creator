const experienceStateField = [];

function getExperienceStateField(state = experienceStateField, action) {
    switch(action.type) {
        case 'ADD_EXPERIENCE_FIELD':
            return [...state, {
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
            }];

        case 'DELETE_EXPERIENCE_FIELD':
            return state.filter((experience, index) => index !== action.payload);

        case 'SET_POSITION':
            return state.map((experience, index) =>
                index === action.payload.id ? experience : { ...experience, position: action.payload.position }
            );

        case 'SET_COMPANY':
            return state.map((experience, index) => 
                index === action.payload.id ? experience : { ...experience, company: action.payload.company }
            );
            

        case 'SET_CITY':
            return state.map((experience, index) => 
                index === action.payload.id ? experience : { ...experience, city: action.payload.city }
            );

        case 'SET_FROM':
            return state.map((experience, index) => 
                index === action.payload.id ? experience : { ...experience, from: action.payload.from }
            );

        case 'SET_TO':
            return state.map((experience, index) => 
                index === action.payload.id ? experience : { ...experience, to: action.payload.to }
            );

        default: 
            return state;
    }
};

export const experienceReduce = ({
    experienceStateField,
    getExperienceStateField
});