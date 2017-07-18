import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  // starting and zoom level for mapview
  // lon and lat are center
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    },
    marker: {
      coordinate: {
        longitude: -122,
        latitude: 37,
      },
      title: 'test',
      description: 'this is so fun'
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    // console.log(region);
    this.setState({ region });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
          <MapView.Marker
            coordinate={this.state.marker.coordinate}
            title={this.state.marker.title}
            description={this.state.marker.description}
          />
        </MapView>
      </View>
    );
  }
}

export default MapScreen;


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Text, View, ActivityIndicator } from 'react-native';
// import { MapView } from 'expo';
// // need to add Image back in
// import { Button, Card, CardSection, Spinner } from '../components/common';
// import { courseDetailsFetch, createScorecardForm } from '../actions';
//
//
// class CourseDetails extends Component {
//
//   state = {
//     mapLoaded: false,
//     region: {
//       longitude: -122,
//       latitude: 37,
//       longitudeDelta: 0.04,
//       latitudeDelta: 0.09
//     }
//   }
//
//   componentWillMount() {
//     console.log(this.props.courseId);
//     this.props.courseDetailsFetch({ courseId: this.props.courseId });
//   }
//
//   componentDidMount() {
//     this.setState({ mapLoaded: true });
//   }
//
//   onPressStart() {
//     console.log('1. pressed start button to create scorecard');
//     console.log('passing courseId: ', this.props.courseId);
//     this.props.createScorecardForm({ courseId: this.props.courseId });
//   }
//
//   constructImageUrl() {
//     const { course_photo_url_medium } = this.props.courseDetails;
//     const baseUrl = 'https://www.dgcoursereview.com/course_pics/';
//     const imageSrc = course_photo_url_medium.slice(42);
//
//     return `${baseUrl}${imageSrc}`;
//   }
//
//   displayPublicPrivate(privateStatus) {
//     if (privateStatus === 1) { return 'Private'; }
//     return 'Public';
//   }
//
//   onRegionChangeComplete = (region) => {
//     // console.log(region);
//     this.setState({ region });
//   }
//
//   render() {
//     if (!this.props.courseDetails || !this.state.mapLoaded) {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center' }}>
//           <ActivityIndicator size='large' />
//         </View>
//       );
//     }
//
//     const { name, holes, rating, longitude, latitude } = this.props.courseDetails;
//     const privateStatus = this.props.courseDetails.private;
//
//     // <CardSection>
//     //   <Image source={{ uri: this.constructImageUrl() }} style={styles.imageStyle} />
//     // </CardSection>
//     return (
//       <Card>
//
//         <CardSection>
//           <Text>{name} and rating: {rating}</Text>
//         </CardSection>
//
//         <CardSection>
//           <Text>
//             Decription placeholder text Located west of Rochester
//             N.Y. in the town of Riga. It is an 18 hole course with the
//             front 9 mostly open and park like and the back 9 weaving in
//             and out of the woods. "Woodsy" atmosphere and a few holes
//             where water comes into play.
//           </Text>
//         </CardSection>
//
//         <CardSection>
//           <Text>{this.displayPublicPrivate(privateStatus)}</Text>
//         </CardSection>
//
//         <CardSection>
//           <Text>{holes} Holes</Text>
//         </CardSection>
//
//         <CardSection>
//           <Text>Distance from current location</Text>
//         </CardSection>
//
//         <CardSection>
//           console.log('1.', this.state);
//           <View style={{ flex: 1 }}>
//             <MapView
//               region={this.state.region}
//               style={{ flex: 1 }}
//               onRegionChangeComplete={this.onRegionChangeComplete}
//             />
//           </View>
//         </CardSection>
//
//         <CardSection>
//           <Button onPress={this.onPressStart.bind(this)}>Start Game</Button>
//         </CardSection>
//       </Card>
//     );
//   }
// }
//
// // const styles = {
// //   imageStyle: {
// //     height: 250,
// //     flex: 1,
// //     width: null,
// //   },
// // };
//
//
// const mapStateToProps = state => {
//   const { courseDetails } = state.courses;
//   return { courseDetails };
// };
//
// export default connect(mapStateToProps, { courseDetailsFetch, createScorecardForm })(CourseDetails);
