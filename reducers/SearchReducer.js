import { SEARCH_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { courses: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_FETCH_SUCCESS:
      console.log('in SEARCH_FETCH_SUCCESS. courses:', action.payload);
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};
