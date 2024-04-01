const initialBooleanState = {
    booleanValue: false,
    togglePDFValue: true,
}

function toggleBooleanValue(state = initialBooleanState, action) {
    switch (action.type) {
        case 'GET_BOOLEAN_VALUE':
            return { ...state, booleanValue: action.payload};

        case 'TOGGLE_PDF':
            return { ...state, togglePDFValue: action.payload};

        default:
            return state;
      }
}

export const toggleReducer = toggleBooleanValue;