import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
// need to add Image back in
import { Button, Card, CardSection, Spinner } from '../components/common';
import { courseDetailsFetch, createScorecardForm } from '../actions';


class CourseDetails extends Component {

  componentWillMount() {
    console.log(this.props.courseId);
    this.props.courseDetailsFetch({ courseId: this.props.courseId });
  }

  onPressStart() {
    console.log('1. pressed start button to create scorecard');
    console.log('passing courseId: ', this.props.courseId);
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
    if (!this.props.courseDetails) {
      return (
          <Spinner />
      );
    }

    const { name, holes, rating } = this.props.courseDetails;
    const privateStatus = this.props.courseDetails.private;

    // <CardSection>
    //   <Image source={{ uri: this.constructImageUrl() }} style={styles.imageStyle} />
    // </CardSection>
    return (
      <Card>

        <CardSection>
          <Text>{name} and rating: {rating}</Text>
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

        <CardSection>
          <Text>Map will go here</Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressStart.bind(this)}>Start Game</Button>
        </CardSection>
      </Card>
    );
  }
}

// const styles = {
//   imageStyle: {
//     height: 250,
//     flex: 1,
//     width: null,
//   },
// };


const mapStateToProps = state => {
  const { courseDetails } = state.courses;
  return { courseDetails };
};

export default connect(mapStateToProps, { courseDetailsFetch, createScorecardForm })(CourseDetails);
