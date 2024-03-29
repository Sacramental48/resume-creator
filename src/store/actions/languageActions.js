export const setInputField = (inputField, index) => ({
    type: 'SET_INPUTFIELD',
    payload: {inputField, index}
});

export const setBeginner = (begginer, index) => ({
    type: 'SET_BEGINNER',
    payload: {begginer, index}
});

export const setElementary = (elementary, index) => ({
    type: 'SET_ELEMENTARY',
    payload: {elementary, index}
});

export const setIntermediate = (intermediate, index) => ({
    type: 'SET_INTERMEDIATE',
    payload: {intermediate, index}
});

export const setUpperIntermediate = (upperIntermediate, index) => ({
    type: 'SET_Upper_INTERMEDIATE',
    payload: {upperIntermediate, index}
});

export const setAdvanced = (advanced, index) => ({
    type: 'SET_ADVANCED',
    payload: {advanced, index}
});

export const setMastery = (mastery, index) => ({
    type: 'SET_MASTERY',
    payload: {mastery, index}
});

export const addNewLangField = () => ({
    type: 'ADD_LANGUAGE_FIELD'
});

export const deleteCurrentLangField = (index) => ({
    type: 'DELETE_CURRENT_LANGUAGE_FIELD',
    payload: index
});

export const deleteAllLangFields = () => ({
    type: 'DELETE_ALL_LANGUAGE_FIELDS'
});