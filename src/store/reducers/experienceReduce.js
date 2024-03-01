const experienceStateField = [];

function getExperienceStateField(state = experienceStateField, action) {
    const index = action.payload?.index;
    switch(action.type) {
        case 'ADD_EXPERIENCE_FIELD':
            return [...state];

        case 'DELETE_EXPERIENCE_FIELD':
            return Object.values(state).filter((experience, index) => index !== action.payload);

        case 'SET_POSITION':
            return {
                ...state,
                [index]: {
                    ...state[index],
                    position: action.payload.position,
                }
            };
            
        case 'SET_COMPANY':
            return {
                ...state,
                [index]: {
                    ...state[index],
                    company: action.payload.company
                }
            };

        case 'SET_CITY':
            return {
                ...state,
                [index]: {
                    ...state[index],
                    city: action.payload.city
                }
            };

        case 'SET_FROM':
            return {
                ...state,
                [index]: {
                    ...state[index],
                    from: action.payload.from
                }
            };

        case 'SET_TO':
            return {
                ...state,
                [index]: {
                    ...state[index  ],
                    to: action.payload.to
                }
            };

        default: 
            return state;
    }
};

export const experienceReduce = ({
    experienceStateField,
    getExperienceStateField
});