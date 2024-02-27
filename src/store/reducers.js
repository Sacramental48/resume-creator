import { combineReducers } from 'redux';
import { mainFieldReduce } from './reducers/personalReduce';
import { experienceReduce } from './reducers/experienceReduce';


const personalField = mainFieldReduce.personalField;
const getPersonalField = mainFieldReduce.getPersonalField;

const experienceStateField = experienceReduce.experienceStateField;
const getExperienceStateField = experienceReduce.getExperienceStateField;

const rootReducer = combineReducers({
    personalField: getPersonalField,
    experienceStateField: getExperienceStateField
});

export default rootReducer;
