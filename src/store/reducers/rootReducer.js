import {combineReducers} from 'redux';
import boughtReducer from './boughtReducer';

const rootReducer = combineReducers({
    bought: boughtReducer,

});

export default rootReducer;
