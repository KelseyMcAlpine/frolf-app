import { SAVE_SCORES_SUCCESS, CLEAR_SCORES_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const saveScores = ({ currentHole, scores }) => {
  return {
    type: SAVE_SCORES_SUCCESS,
    payload: {
      currentHole,
      scores
    }
  };
};

export const clearScores = () => {
  Actions.scorecardsList({ type: 'reset' });
  return { type: CLEAR_SCORES_SUCCESS }
};
