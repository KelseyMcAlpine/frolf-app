import { SCORECARDS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { history: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCORECARDS_FETCH_SUCCESS:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
