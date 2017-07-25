import { SAVE_SCORES_SUCCESS, CLEAR_SCORES_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const saveScores = ({ currentHole, scores }, callback) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_SCORES_SUCCESS,
      payload: {
        currentHole,
        scores
      }
    });
    callback();
  }
};

export const clearScores = () => {
  Actions.scorecardsList({ type: 'reset' });
  return { type: CLEAR_SCORES_SUCCESS }
};
