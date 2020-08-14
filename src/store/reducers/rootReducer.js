import {combineReducers} from 'redux';
import boughtReducer from './boughtReducer';
import recivedReducer from './recivedReducer';

const rootReducer = combineReducers({
    bought: boughtReducer,
    recived: recivedReducer
});

export default rootReducer;
