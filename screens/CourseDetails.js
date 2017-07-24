import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Image } from 'react-native';
import { Button, GrayButton, Card, CardSection, Spinner, ImageSection, Rating } from '../components/common';
import { courseDetailsFetch, createScorecardForm } from '../actions';
import { FontAwesome } from '@expo/vector-icons';
import { MapView, WebBrowser } from 'expo';

class CourseDetails extends Component {
<<<<<<< HEAD:components/CourseDetails.js
  constructor({courseDetails}){
    super({courseDetails});
=======
  constructor(props) {
    super(props);
    const { courseDetails } = this.props;
>>>>>>> 1f70e752f38283cae52d6cfc637be7583e742544:screens/CourseDetails.js
    this.state = {
      mapLoaded: false,
      region: {
        longitude: parseInt(courseDetails.longitude),
        latitude: parseInt(courseDetails.latitude),
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
      },
      marker: {
        coordinate: {
          longitude: parseInt(courseDetails.longitude),
          latitude: parseInt(courseDetails.latitude),
        },
        title: courseDetails.name,
      }
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onGetDirections = () => {
    const courseLat = this.props.courseDetails.latitude;
    const courseLon = this.props.courseDetails.longitude;
    WebBrowser.openBrowserAsync(`http://maps.apple.com/?daddr=${courseLat},${courseLon}`);
  }

  onPressStart() {
<<<<<<< HEAD:components/CourseDetails.js
    const courseId = this.props.courseDetails.course_id;
    this.props.createScorecardForm(courseId);
=======
    this.props.createScorecardForm({ courseId: this.props.courseId });
>>>>>>> 1f70e752f38283cae52d6cfc637be7583e742544:screens/CourseDetails.js
  }

  constructImageUrl() {
    const { course_photo_url_medium } = this.props.courseDetails;
    const baseUrl = 'https://www.dgcoursereview.com/course_pics/';
    const imageSrc = course_photo_url_medium.slice(42);

    return `${baseUrl}${imageSrc}`;
  }

  displayPublicPrivate(privateStatus) {
    if (privateStatus === 1) { return 'Private'; }
    return 'Public';
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <Spinner />
      );
    }

    const { name, holes, rating, longitude, latitude } = this.props.courseDetails;
    const privateStatus = this.props.courseDetails.private;

    return (
      <ScrollView style={{ backgroundColor: '#EEEEEE' }}>
        <Card>
          <ImageSection imageURL={this.constructImageUrl()} />

          <CardSection style={{
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottomWidth: 1,
            borderColor: '#ddd',
          }}>
            <Text style={styles.titleStyle}>{name}</Text>
            <Rating rating={rating} />
          </CardSection>

          <CardSection style={{
            borderBottomWidth: 1,
            borderColor: '#ddd',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
            <Text>
              Decription placeholder text Located west of Rochester
              N.Y. in the town of Riga. It is an 18 hole course with the
              front 9 mostly open and park like and the back 9 weaving in
              and out of the woods. "Woodsy" atmosphere and a few holes
              where water comes into play.
            </Text>
          </CardSection>

          <CardSection style={{ borderBottomWidth: 1, borderColor: '#ddd', alignItems: 'center'}}>
            <View style={{ width: 24 }}>
              <FontAwesome name="dollar" size={24} color="#6BD13D" />
            </View>
            <Text>{this.displayPublicPrivate(privateStatus)}</Text>
          </CardSection>

          <CardSection style={{ borderBottomWidth: 1, borderColor: '#ddd', alignItems: 'center'}}>
            <View style={{ width: 24 }}>
              <FontAwesome name="hashtag" size={18} color="#6BD13D" />
            </View>
            <Text>{holes} Holes</Text>
          </CardSection>

          <CardSection style={{ borderBottomWidth: 1, borderColor: '#ddd', alignItems: 'center'}}>
            <View style={{ width: 24 }}>
              <FontAwesome name="map-marker" size={24} color="#6BD13D" />
            </View>
            <Text>Distance from current location</Text>
          </CardSection>

          <CardSection style={styles.mapCard}>
            <View style={styles.mapContainer}>
              <MapView
                region={this.state.region}
                style={styles.map}
                onRegionChangeComplete={this.onRegionChangeComplete}
              >
                <MapView.Marker
                  coordinate={this.state.marker.coordinate}
                  title={this.state.marker.title}
                  description={this.state.marker.description}
                  pinColor='#6BD13D'
                />
              </MapView>
            </View>
          </CardSection>

          <CardSection style={{ borderTopWidth: 1, borderColor: '#ddd', paddingBottom: 0 }}>
            <GrayButton onPress={this.onGetDirections}>GET DIRECTIONS</GrayButton>
          </CardSection>

          <CardSection style={{ paddingTop: 9 }}>
            <Button onPress={this.onPressStart.bind(this)}>NEW SCORECARD</Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 250,
    flex: 1,
    width: null,
  },
  mapCard: {
    height: 200
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
    height: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};
const mapStateToProps = state => {
  const { courseDetails } = state.courses;
  return { courseDetails };
};

export default connect(mapStateToProps, { createScorecardForm })(CourseDetails);
