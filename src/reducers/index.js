import { combineReducers } from 'redux';

import status from './statusReducer.js';
import bios from './biosReducer';
import entries from './entriesReducer';

const reducers = combineReducers({
    status,
    bios,
    entries
});

export default reducers;
