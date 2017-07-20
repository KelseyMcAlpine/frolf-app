import axios from 'axios';
import { DG_API_KEY, DG_COURSE_DETAILS_SIG, DG_RADIUS_LIST_SIG } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';
import {
  COURSE_LIST_FETCH_SUCCESS,
  COURSE_DETAILS_FETCH_SUCCESS
} from './types';

export const courseListFetch = (userLat, userLon, callback) => async (dispatch) => {
  try {
    let { data } = await axios.get('https://www.dgcoursereview.com/api_test/index.php', {
        params: {
          key: DG_API_KEY,
          mode: 'near_rad',
          lat: userLat,
          lon: userLon,
          rad: 25,
          sig: DG_RADIUS_LIST_SIG
        }
      }
    );
    dispatch({ type: COURSE_LIST_FETCH_SUCCESS, payload: data });
    callback();
  } catch(e) {
    console.error(e);
  }
};

export const courseDetailsFetch = (courseId, callback) => async (dispatch) => {
  try {
    let { data } = await axios.get('https://www.dgcoursereview.com/api_test/index.php', {
      params: {
        key: DG_API_KEY,
        mode: 'crseinfo',
        id: courseId,
        sig: DG_COURSE_DETAILS_SIG
      }
    });
    dispatch({ type: COURSE_DETAILS_FETCH_SUCCESS, payload: data });
    callback();
  } catch(e) {
    console.error(e);
  }
};
