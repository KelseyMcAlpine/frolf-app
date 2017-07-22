import axios from 'axios';
import {
  DG_API_KEY,
  DG_COURSE_DETAILS_SIG,
  DG_RADIUS_LIST_SIG,
  DG_COURSE_IMAGE_SIG,
  GOOGLEMAPS_KEY
} from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';
import {
  COURSE_LIST_FETCH_SUCCESS,
  COURSE_DETAILS_FETCH_SUCCESS
} from './types';

export const courseListFetch = () => async (dispatch) => {
  try {
    let { data } = await axios.get('https://api.myjson.com/bins/12qesz');
    let allInfo = await Promise.all(
      data.map(async (course) => {
        console.log('mapping response')
        // let dgc_image = await axios.get('https://www.dgcoursereview.com/api_test/index.php', {
        //   params: {
        //     key: DG_API_KEY,
        //     mode: 'crsephto',
        //     id: course.course_id,
        //     sig: DG_COURSE_IMAGE_SIG
        //   }
        // });

        let dgc_image = await axios.get('https://api.myjson.com/bins/a546b');
        const courseLatLon = `${course.latitude},${course.longitude}`;
        let google_distance = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
          params: {
            units: 'imperial',
            origins: '43.161030,-77.610924',
            destinations: courseLatLon,
            key: GOOGLEMAPS_KEY
          }
        })

        return {
          id: course.course_id,
          name: course.name,
          latitude: course.latitude,
          longitude: course.longitude,
          rating: course.rating,
          image: dgc_image.data.course_photo_url_medium,
          distance: google_distance.data.rows[0].elements[0].distance.text
        }
      })
    )
    console.log('allinfo:', allInfo);
    dispatch({ type: COURSE_LIST_FETCH_SUCCESS, payload: allInfo });
  } catch(e) {
    console.error(e);
  }
};

export const courseDetailsFetch = (courseId, callback) => async (dispatch) => {
  try {
    let { data } = await axios.get('https://api.myjson.com/bins/ny42n');
    dispatch({ type: COURSE_DETAILS_FETCH_SUCCESS, payload: data });
    callback();
  } catch(e) {
    console.error(e);
  }
};
