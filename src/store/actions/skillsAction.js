export const setSkillName = (skillName, index) => ({
    type: 'SET_SKILL_NAME',
    payload: {skillName, index}
});

export const setSkillLevel = (skillLevel, index) => ({
    type: 'SET_SKILL_LEVEL',
    payload: {skillLevel, index}
});

export const addSkillField = () => ({
    type: 'ADD_SKILL_FIELD'
});

export const deleteCurrentSkillField = (index) => ({
    type: 'DELETE_CURRENT_SKILL_FIELD',
    payload: index
});

export const deleteAllSkillFields = () => ({
    type: 'DELETE_ALL_SKILL_FIELDS'
});