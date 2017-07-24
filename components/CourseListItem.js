import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { courseDetailsFetch } from '../actions';
import { Card, CardSection, ImageSection, Rating } from './common';

class CourseListItem extends Component {

  onRowPress = () => {
    const courseId = this.props.course.id;
    this.props.courseDetailsFetch(courseId, () => { Actions.courseDetails() });
  }

  render() {
    const { name, rating, imageURL, distance } = this.props.course;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Card>
            <ImageSection imageURL={imageURL} />

            <CardSection style={{ paddingBottom: 0 }}>
              <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>

            <CardSection style={{ paddingTop: 3, justifyContent: 'space-between' }}>
              <Text style={styles.subTitleSyle}>{distance}</Text>
              <Rating rating={rating} />
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
  },
  subTitleSyle: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)'
  }
};

export default connect(null, { courseDetailsFetch })(CourseListItem);
