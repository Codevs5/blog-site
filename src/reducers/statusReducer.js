import * as c from '../constants/statusTypes';

export default (state = {
  currentPage: ''
}, action) => {
  switch (action.type) {
    case c.NAVIGATE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state;

  }
}
