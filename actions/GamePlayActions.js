import { SAVE_SCORES_SUCCESS } from './types';

export const saveScores = ({ currentHole, scores }) => {
  console.log('in save scores. current hole: ', currentHole);
  console.log('in save scores. scores: ', scores);
  return {
    type: SAVE_SCORES_SUCCESS,
    payload: {
      currentHole,
      scores
    }
  };
};
