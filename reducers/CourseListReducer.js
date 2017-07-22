import { COURSE_LIST_FETCH_SUCCESS, COURSE_DETAILS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { courses: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COURSE_LIST_FETCH_SUCCESS:
      console.log('in course list fetch success');
      return { ...state, courses: action.payload };
    case COURSE_DETAILS_FETCH_SUCCESS:
      return { ...state, courseDetails: action.payload };
    default:
      return state;
  }
};
