import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Card, CardSection, Spinner, ImageSection, Rating } from '../components/common';
import { courseDetailsFetch, createScorecardForm } from '../actions';
import { MapView } from 'expo';

class CourseDetails extends Component {
  // starting and zoom level for mapview
  // lon and lat are center
  constructor({courseDetails}){
    super({courseDetails});
    this.state = {
      mapLoaded: false,
      region: {
        longitude: courseDetails.longitude,
        latitude: courseDetails.latitude,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
      },
      marker: {
        coordinate: {
          longitude: courseDetails.longitude,
          latitude: courseDetails.latitude,
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

  onPressStart() {
    this.props.createScorecardForm({ courseId: this.props.courseId });
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
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    const { name, holes, rating, longitude, latitude } = this.props.courseDetails;
    const privateStatus = this.props.courseDetails.private;

    return (
      <ScrollView>
        <Card>
          <ImageSection>
            <Image source={{ uri: this.constructImageUrl() }} style={styles.imageStyle} />
          </ImageSection>

          <CardSection>
            <Text>{name}</Text>
          </CardSection>

          <CardSection>
            <Rating rating={rating} />
          </CardSection>

          <CardSection>
            <Text>
              Decription placeholder text Located west of Rochester
              N.Y. in the town of Riga. It is an 18 hole course with the
              front 9 mostly open and park like and the back 9 weaving in
              and out of the woods. "Woodsy" atmosphere and a few holes
              where water comes into play.
            </Text>
          </CardSection>

          <CardSection>
            <Text>{this.displayPublicPrivate(privateStatus)}</Text>
          </CardSection>

          <CardSection>
            <Text>{holes} Holes</Text>
          </CardSection>

          <CardSection>
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
                />
              </MapView>
            </View>
          </CardSection>

          <CardSection>
            <Button onPress={this.onPressStart.bind(this)}>Start Game</Button>
          </CardSection>

          <CardSection>
            <Button>Get Directions</Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle: {
    height: 250,
    flex: 1,
    width: null,
  },
  mapCard: {
    height: 300
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
