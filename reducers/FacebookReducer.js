import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  USER_INFO_FETCH_SUCCESS
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    case USER_INFO_FETCH_SUCCESS:
      return { ...state, user_info: action.payload };
    default:
      return state;
  }
}
