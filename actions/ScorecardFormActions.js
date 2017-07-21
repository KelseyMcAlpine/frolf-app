import firebase from 'firebase';
import axios from 'axios';
// import { DG_API_KEY, DG_HOLE_DETAILS_SIG } from 'react-native-dotenv';
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

export const createScorecardForm = ({ courseId }) => {
  return (dispatch) => {
    console.log('in create Scorecard form');
    console.log('courseId: ', courseId);
    axios.get('https://api.myjson.com/bins/pqvsb')
    // axios.get('https://www.dgcoursereview.com/api_test/index.php', {
    //     params: {
    //       key: DG_API_KEY,
    //       mode: 'holeinfo',
    //       id: courseId,
    //       sig: DG_HOLE_DETAILS_SIG
    //     }
    //   })
      .then((response) => {
        console.log('Get hole details response.data: ', response.data);
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
    console.log('current user: ', currentUser);
    console.log('scorecard info: ', scorecardInfo);
    // also need to send the scorecard info as props

    firebase.database().ref(`/users/${currentUser.uid}/scorecards`).push(scorecardInfo)
      .then((response) => {
        console.log('firebase resonse:', response);
        dispatch({
          type: SCORECARD_SAVE_SUCCESS,
          payload: response.key
        });
      });
    //
  };
};
