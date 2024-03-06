import { combineReducers } from 'redux';
import { mainFieldReduce } from './reducers/personalReduce';
import { experienceReduce } from './reducers/experienceReduce';
import { educationReduce } from './reducers/educationReduce';


const personalReducer = mainFieldReduce;
const experienceReducer = experienceReduce;
const educationReducer = educationReduce;

const rootReducer = combineReducers({
    personalField: personalReducer,
    experienceStateField: experienceReducer,
    educationStateField: educationReducer
});

export default rootReducer;
