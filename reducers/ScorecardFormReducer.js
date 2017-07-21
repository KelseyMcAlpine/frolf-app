import {
  CREATE_SCORECARD_FORM_SUCCESS,
  SCORECARD_SAVE_SUCCESS,
  SAVE_PLAYERS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SCORECARD_FORM_SUCCESS:
      return { ...state, holeDetails: action.payload };
    case SCORECARD_SAVE_SUCCESS:
      return { ...state };
    case SAVE_PLAYERS_SUCCESS:
      return { ...state, players: action.payload };
    default:
      return state;
  }
};
