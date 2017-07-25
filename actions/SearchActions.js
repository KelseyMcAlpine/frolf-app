import axios from 'axios';
import { DG_API_KEY, DG_SEARCH_SIG, DG_COURSE_IMAGE_SIG, GOOGLEMAPS_KEY } from 'react-native-dotenv';
import { SEARCH_FETCH_SUCCESS } from './types';

export const searchCourses = (city, state, userLat, userLon, callback) => async (dispatch) => {
  try {
    let { data } = await axios.get('https://www.dgcoursereview.com/api_test/index.php', {
      params: {
        key: DG_API_KEY,
        mode: 'findloc',
        city: city,
        state: state,
        country: 'US',
        sig: DG_SEARCH_SIG
      }
    });

    let allInfo = await Promise.all(
      data.map(async (course) => {
        let dgc_image = await axios.get('https://www.dgcoursereview.com/api_test/index.php', {
          params: {
            key: DG_API_KEY,
            mode: 'crsephto',
            id: course.course_id,
            sig: DG_COURSE_IMAGE_SIG
          }
        });

        const courseLatLon = `${course.latitude},${course.longitude}`;
        const userLatLon = `${userLat},${userLon}`;

        let google_distance = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
          params: {
            units: 'imperial',
            origins: userLatLon,
            destinations: courseLatLon,
            key: GOOGLEMAPS_KEY
          }
        })

        console.log('google_distance:', google_distance);

        return {
          id: course.course_id,
          key: course.course_id,
          name: course.name,
          latitude: course.latitude,
          longitude: course.longitude,
          rating: course.rating,
          image: dgc_image.data.course_photo_url_medium,
          distance: google_distance.data.rows[0].elements[0].distance.text
        }
      })
    )

    dispatch({ type: SEARCH_FETCH_SUCCESS, payload: allInfo });
    callback({ type: 'reset' });
  } catch(e) {
    console.error(e);
  }
};
