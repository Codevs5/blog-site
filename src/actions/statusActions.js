import * as c from '../constants/statusTypes';

export const navigate = (page) => ({
  type: c.NAVIGATE,
  payload: page
});

export const startLoading = () => ({
  type: c.START_LOADING
});

export const endLoading = () => ({
  type: c.END_LOADING
});
