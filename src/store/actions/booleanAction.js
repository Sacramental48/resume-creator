export const getBooleanValue = (value) => ({
    type: 'GET_BOOLEAN_VALUE',
    payload: value
});

export const togglePdfValue = (value) => ({
    type: 'TOGGLE_PDF',
    payload: value
});