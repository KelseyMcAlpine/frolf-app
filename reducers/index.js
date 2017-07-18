import { combineReducers } from 'redux';
import FBAuthReducer from './FBAuthReducer';
import CourseListReducer from './CourseListReducer';
import ScorecardFormReducer from './ScorecardFormReducer';

export default combineReducers({
  auth: FBAuthReducer,
  courses: CourseListReducer,
  scorecardForm: ScorecardFormReducer,
});
