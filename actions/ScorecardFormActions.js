import firebase from 'firebase';
import axios from 'axios';
import { DG_API_KEY, DG_HOLE_DETAILS_SIG } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';
import {
  CREATE_SCORECARD_FORM_SUCCESS,
  SCORECARD_SAVE_SUCCESS,
  SAVE_PLAYERS_SUCCESS
} from './types';

export const savePlayers = ({ players }) => {
  return {
    type: SAVE_PLAYERS_SUCCESS,
    payload: players
  };
};

export const createScorecardForm = (courseId) => {
  return (dispatch) => {
<<<<<<< HEAD
    axios.get('https://www.dgcoursereview.com/api_test/index.php', {
        params: {
          key: DG_API_KEY,
          mode: 'holeinfo',
          id: courseId,
          sig: DG_HOLE_DETAILS_SIG
        }
      })
=======
    axios.get('https://api.myjson.com/bins/pqvsb')
    // axios.get('https://www.dgcoursereview.com/api_test/index.php', {
    //     params: {
    //       key: DG_API_KEY,
    //       mode: 'holeinfo',
    //       id: courseId,
    //       sig: DG_HOLE_DETAILS_SIG
    //     }
    //   })
>>>>>>> 1f70e752f38283cae52d6cfc637be7583e742544
      .then((response) => {
        dispatch({
          type: CREATE_SCORECARD_FORM_SUCCESS,
          payload: response.data
        });
        Actions.scorecardForm();
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
};

export const saveScorecard = ({ scorecardInfo }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
<<<<<<< HEAD
=======
    // also need to send the scorecard info as props

>>>>>>> 1f70e752f38283cae52d6cfc637be7583e742544
    firebase.database().ref(`/users/${currentUser.uid}/scorecards`).push(scorecardInfo)
      .then((response) => {
        dispatch({
          type: SCORECARD_SAVE_SUCCESS,
          payload: response.key
        });
      });
    //
  };
};
