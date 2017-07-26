import firebase from 'firebase';
import { SCORECARDS_FETCH_SUCCESS } from './types';

export const scorecardsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/scorecards`)
      .on('value', snapshot => {
        dispatch({ type: SCORECARDS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
