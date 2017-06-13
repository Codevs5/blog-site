import * as c from '../constants/statusTypes';

export default(state = {
  currentPage: '',
  loading: false
}, action) => {
  switch (action.type) {
    case c.NAVIGATE:
      return {
        ...state,
        currentPage: action.payload
      };
    case c.START_LOADING:
      return {
        ...state,
        loading: true
      };
    case c.END_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state;

  }
}
