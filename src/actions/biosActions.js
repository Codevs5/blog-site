import * as c from '../constants/biosTypes';
import * as firebase from 'firebase';

import { startLoading, endLoading } from './statusActions';
import { biosToArray } from '../utils/fireParser';

export const fetchBios = () => (dispatch) => {
  dispatch(startLoading());
  const dbRef = firebase.database().ref('users');
  dbRef.orderByChild('metadata/isAdmin').equalTo(true).once('value')
      .then((res) => res.val())
      .then((data) => biosToArray(data))
      .then((parsedData) => dispatch({
        type: c.FETCH_BIOS,
        payload: parsedData
      }))
      .then(() => dispatch(endLoading()));
};
