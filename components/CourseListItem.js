import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { courseDetailsFetch } from '../actions';
import { Card, CardSection, ImageSection } from './common';
import { FontAwesome } from '@expo/vector-icons';

class CourseListItem extends Component {

  onRowPress = () => {
    this.props.courseDetailsFetch(this.props.course.course_id, () => { Actions.courseDetails(); });
  }

  displayRating(rating) {
    let displayRating = [];

    const wholeStars = Math.floor(rating);
    const halfStars = ( rating - wholeStars >= .5 ? 1 : 0 );
    const emptyStars = ( 5 - wholeStars - halfStars );

    for (let i = 0; i < wholeStars; i++) {
      displayRating.push(
        <FontAwesome name="star" size={32} color="green" />
      );
    }

    for (let i = 0; i < halfStars; i++) {
      displayRating.push(
        <FontAwesome name="star-half-full" size={32} color="green" />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      displayRating.push(
        <FontAwesome name="star-o" size={32} color="green" />
      );
    }

    return (
      <View style={styles.starRatingContainer}>
        {displayRating}
      </View>
    );
  }

  render() {
    const { name, rating } = this.props.course;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Card>
            <ImageSection>
              <Image source={{ uri: 'https://www.dgcoursereview.com/course_pics/5/710589e1_m.jpg' }} style={styles.imageStyle} />
            </ImageSection>

            <CardSection>
              <View>
                <Text>{name}</Text>
                <View>
                  <Text>Distance</Text>
                </View>
                {this.displayRating(rating)}
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },

  imageStyle: {
    height: 250,
    flex: 1,
    width: null,
  },

  starRatingContainer: {
    height: 40,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default connect(null, { courseDetailsFetch })(CourseListItem);
