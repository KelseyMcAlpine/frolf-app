import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

// async storage part of react native
// allows us to save data to users phone
// if user closes app/ shuts down phone
// redux store would be empty -- no persistance
// similar to local storage

// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');
// AsyncStorage returns a promise after success

// going to use async/await to handle MANY async
// requests that depend on one another
// 'gracefully handle promises'
// must assign promosie with 'let' rather than const
//
// example:
// doLongRunningThing = async() => {
//  let result = await myRequest();
//  console.log(result);
// }

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // dispatch an action saying login successful
    // token in reducer and async storage
    console.log('in facebook login. token found. token: ', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // start fb login process
    // adds access to dispatch
    console.log('in facebook login. no token found');
    doFacebookLogin(dispatch);
  }
};

// helper function
// need to add access to dispatch
const doFacebookLogin = async (dispatch) => {
  // first argument is FB APP Id as ** string **
  // second is permissions we want to have as object
  // additional permissions can be found here
  // https://developers.facebook.com/docs/facebook-login/permissions
  console.log('in do facebook login');
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile']
  });
  // result will contain a type and token property
  // cancel == something went wrong/failed with login process
  if (type === 'cancel') {
    console.log('canceled');
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  console.log('in do facebook login. now have a token! :', token);
};
