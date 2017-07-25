import { SAVE_SCORES_SUCCESS, CLEAR_SCORES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_SCORES_SUCCESS:
      return { ...state, [`hole_${action.payload.currentHole}`]: action.payload.scores };
    case CLEAR_SCORES_SUCCESS:
      return INITIAL_STATE
    default:
      return state;
  }
};
