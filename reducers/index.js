import { combineReducers } from 'redux';
import CourseListReducer from './CourseListReducer';
import ScorecardFormReducer from './ScorecardFormReducer';
import FacebookReducer from './FacebookReducer';
import GamePlayReducer from './GamePlayReducer';

export default combineReducers({
  courses: CourseListReducer,
  scorecardForm: ScorecardFormReducer,
  facebook: FacebookReducer,
  gameScores: GamePlayReducer
});
