import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CourseListReducer from './CourseListReducer';
import ScorecardFormReducer from './ScorecardFormReducer';

export default combineReducers({
  auth: AuthReducer,
  courses: CourseListReducer,
  scorecardForm: ScorecardFormReducer,
});
