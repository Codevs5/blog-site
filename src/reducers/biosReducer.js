import * as c from '../constants/biosTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case c.FETCH_BIOS:
        return action.payload;
    default:
        return state;
  }
};

export default reducer;
