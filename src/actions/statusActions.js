import * as c from '../constants/statusTypes';

export const navigate = (page) => ({
  type: c.NAVIGATE,
  payload: page
});
