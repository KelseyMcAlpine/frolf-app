import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      console.log('in facebook login success');
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
}
