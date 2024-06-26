const skillsStateField = [];

function getSkillsStateField(state = skillsStateField, action) {
    const index = action.payload?.index;
    
    switch(action.type) {
        case 'ADD_SKILL_FIELD':
            return [...state, {}];

        case 'DELETE_CURRENT_SKILL_FIELD':
            return state.filter((item, idx) => idx !== action.payload);

        case 'DELETE_ALL_SKILL_FIELDS':
            return [];

        case 'SET_SKILL_NAME':
            return state.map((item, idx) => idx === index ? { ...item, skillName: action.payload.skillName } : item);

        case 'SET_SKILL_LEVEL':
            return state.map((item, idx) => idx === index ? { ...item, skillLevel: action.payload.skillLevel } : item);

        default: 
            return state;
    };
}

export const skillReduce = getSkillsStateField;