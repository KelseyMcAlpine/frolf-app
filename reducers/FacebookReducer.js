import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  USER_INFO_FETCH_SUCCESS
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      console.log('in facebook login success. token received')
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      console.log('in facebook login failed. token null')
      return { token: null };
    case USER_INFO_FETCH_SUCCESS:
      console.log('in user info fetch success. user_info name?: ', action.payload.name);
      return { ...state, user_info: action.payload };
    default:
      return state;
  }
}
