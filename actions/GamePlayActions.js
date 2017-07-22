import { SAVE_SCORES_SUCCESS } from './types';

export const saveScores = ({ currentHole, scores }) => {
  return {
    type: SAVE_SCORES_SUCCESS,
    payload: {
      currentHole,
      scores
    }
  };
};
