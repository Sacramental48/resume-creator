const initialBooleanState = {
    booleanValue: false
}

function toggleBooleanValue(state = initialBooleanState, action) {
    switch (action.type) {
        case 'GET_BOOLEAN_VALUE':
            return { ...state, booleanValue: action.payload};
        default:
            return state;
      }
}

export const toggleReducer = toggleBooleanValue;