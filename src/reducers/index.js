import { combineReducers } from 'redux';
import status from './statusReducer.js';

const reducers = combineReducers({
    status,
});

export default reducers;
