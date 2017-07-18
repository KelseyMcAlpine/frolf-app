import axios from 'axios';
// import { DG_API_KEY, DG_COURSE_DETAILS_SIG, DG_RADIUS_LIST_SIG } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';
import {
  COURSE_LIST_FETCH_SUCCESS,
  COURSE_DETAILS_FETCH_SUCCESS
} from './types';

export const courseListFetch = () => {
  return (dispatch) => {
      axios.get('https://api.myjson.com/bins/12qesz')
      // add { userLat and userLon } to props
      // axios.get('https://www.dgcoursereview.com/api_test/index.php', {
      //     params: {
      //       key: DG_API_KEY,
      //       mode: 'near_rad',
      //       lat: userLat,
      //       lon: userLon,
      //       rad: 25,
      //       sig: DG_RADIUS_LIST_SIG
      //     }
      //   })
        .then((response) => {
          dispatch({
            type: COURSE_LIST_FETCH_SUCCESS,
            payload: response.data
          });
          Actions.courseList();
        })
        .catch((err) => {
          console.log('error: ', err);
        });
      //
    };
  };

export const courseDetailsFetch = () => {
  return (dispatch) => {
    axios.get('https://api.myjson.com/bins/11ejt7')
    // add { courseId } to constructor
    // axios.get('https://www.dgcoursereview.com/api_test/index.php', {
    //     params: {
    //       key: DG_API_KEY,
    //       mode: 'crseinfo',
    //       id: courseId,
    //       sig: DG_COURSE_DETAILS_SIG
    //     }
    //   })
      .then((response) => {
        dispatch({
          type: COURSE_DETAILS_FETCH_SUCCESS,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
};
