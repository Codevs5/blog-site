import * as c from '../constants/entriesTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case c.UPDATE_ENTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
