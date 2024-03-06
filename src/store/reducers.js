import { combineReducers } from 'redux';
import { mainFieldReduce } from './reducers/personalReduce';
import { experienceReduce } from './reducers/experienceReduce';
import { educationReduce } from './reducers/educationReduce';
import { toggleReducer } from './reducers/booleanReduce';

const rootReducer = combineReducers({
    personalField: mainFieldReduce,
    experienceStateField: experienceReduce,
    educationStateField: educationReduce,
    initialBooleanState: toggleReducer
});

export default rootReducer;
