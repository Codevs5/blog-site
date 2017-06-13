import * as firebase from 'firebase';

import * as c from '../constants/entriesTypes';
import {startLoading, endLoading} from './statusActions';
import {parseEntriesInfo} from '../utils/fireParser';

export const fetchEntries = () => (dispatch) => {
  dispatch(startLoading());
  const dbRef = firebase.database().ref('entries').child('info');

  dbRef.orderByChild('visible').equalTo(true).once('value')
      .then((res) => res.val())
      .then((data) => parseEntriesInfo(data))
      .then((entries) => dispatch(updateEntries(entries)))
      .then(() => dispatch(endLoading()))
};

export const updateEntries = (entries) => ({
  type: c.UPDATE_ENTRIES,
  payload: entries
});
