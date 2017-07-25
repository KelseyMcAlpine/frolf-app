import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MapView, WebBrowser } from 'expo';
import { createScorecardForm } from '../actions';
import { Button, GrayButton, Card, CardSection,
        Spinner, ImageSection, Rating } from '../components/common';

class CourseDetails extends Component {

  constructor(props) {
    super(props);

    const { latitude, longitude, name } = this.props.courseDetails;

    this.state = {
      mapLoading: true,
      region: {
        longitude: parseInt(longitude, 10),
        latitude: parseInt(latitude, 10),
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
      },
      marker: {
        coordinate: {
          longitude: parseInt(longitude, 10),
          latitude: parseInt(latitude, 10),
        },
        title: name,
      }
    };
  }

  componentDidMount() {
    this.setState({ mapLoading: false });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onGetDirections = () => {
    const { latitude, longitude } = this.props.courseDetails;

    WebBrowser.openBrowserAsync(`http://maps.apple.com/?daddr=${latitude},${longitude}`);
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
    if (this.state.mapLoading) {
      return <Spinner />;
    }

    const { name, holes, rating, city, state } = this.props.courseDetails;
    const privateStatus = this.props.courseDetails.private;
    const { region, marker } = this.state;
    const { titleSection, titleStyle, descriptionSection,
            factSection, iconSpacer, mapCard, mapContainer, map,
            buttonSection, buttonPadding
            } = styles;

    return (
      <ScrollView>
        <Card>
          <ImageSection imageURL={this.constructImageUrl()} />

          <CardSection style={titleSection}>
            <Text style={titleStyle}>{name}</Text>
            <Rating rating={rating} />
          </CardSection>

          <CardSection style={descriptionSection}>
            <Text>
              Decription placeholder text Located west of Rochester
              N.Y. in the town of Riga. It is an 18 hole course with the
              front 9 mostly open and park like and the back 9 weaving in
              and out of the woods. "Woodsy" atmosphere and a few holes
              where water comes into play.
            </Text>
          </CardSection>

          <CardSection style={factSection}>
            <View style={iconSpacer}>
              <FontAwesome name="map-marker" size={18} color="rgb(76,217,100)" />
            </View>
            <Text>{city}, {state}</Text>
          </CardSection>

          <CardSection style={factSection}>
            <View style={iconSpacer}>
              <FontAwesome name="dollar" size={18} color="rgb(76,217,100)" />
            </View>
            <Text>{this.displayPublicPrivate(privateStatus)}</Text>
          </CardSection>


          <CardSection style={factSection}>
            <View style={iconSpacer}>
              <FontAwesome name="hashtag" size={15} color="rgb(76,217,100)" />
            </View>
            <Text>{holes} Holes</Text>
          </CardSection>

          <CardSection style={factSection}>
            <View style={iconSpacer}>
              <FontAwesome name="car" size={15} color="rgb(76,217,100)" />
            </View>
            <Text>{this.props.courseDistance} from current location</Text>
          </CardSection>

          <CardSection style={mapCard}>
            <View style={mapContainer}>
              <MapView
                region={region}
                style={map}
                onRegionChangeComplete={this.onRegionChangeComplete}
              >
                <MapView.Marker
                  coordinate={marker.coordinate}
                  title={marker.title}
                  description={marker.description}
                  pinColor='rgb(76,217,100)'
                />
              </MapView>
            </View>
          </CardSection>

          <CardSection style={buttonSection}>
            <GrayButton onPress={this.onGetDirections}>GET DIRECTIONS</GrayButton>
          </CardSection>

          <CardSection style={buttonPadding}>
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
  titleSection: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  descriptionSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingTop: 15,
    paddingBottom: 15,
  },
  factSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  buttonSection: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 0
  },
  imageStyle: {
    height: 250,
    flex: 1,
    width: null,
  },
  iconSpacer: {
    width: 30
  },
  buttonPadding: {
    paddingTop: 9
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
  const { courseDetails, courseDistance } = state.courses;
  return { courseDetails, courseDistance };
};

export default connect(mapStateToProps, { createScorecardForm })(CourseDetails);
