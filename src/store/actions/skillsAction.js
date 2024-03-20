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
})