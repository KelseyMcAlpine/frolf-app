import { SAVE_SCORES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_SCORES_SUCCESS:
      return { ...state, [`hole_${action.payload.currentHole}`]: action.payload.scores };
    default:
      return state;
  }
};
