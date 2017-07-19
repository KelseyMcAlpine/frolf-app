import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  USER_INFO_FETCH_SUCCESS
} from './types';

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('1849269318659739', {
    permissions: ['public_profile', 'user_friends']
  });
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

export const getUserInfo = (token) => async (dispatch) => {
  try {
    let { data } = await axios.get(`https://graph.facebook.com/v2.10/me?fields=id,name,picture,friends&access_token=${token}`);
    const user_info = {
      name: data.name,
      user_image_url: data.picture.data.url,
      friends: data.friends.data
    };
    dispatch({ type: USER_INFO_FETCH_SUCCESS, payload: user_info });
  } catch(error) {
    console.error(error);
  }
};
