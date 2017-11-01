import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { courseDetailsFetch } from '../actions';
import { Card, CardSection, ImageSection, Rating } from './common';

class CourseListItem extends Component {

  onRowPress = () => {
    console.log('course', this.props.course);
    const { id, distance } = this.props.course;
    this.props.courseDetailsFetch(id, distance, () => { Actions.courseDetails(); });
  }

  render() {
    const { name, rating, imageURL, distance } = this.props.course;
    const { titleStyle, titleContainer, subTitleSyle, subTitleContainer } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Card>
            <ImageSection imageURL={imageURL} />

            <CardSection style={titleContainer}>
              <Text style={titleStyle}>{name}</Text>
            </CardSection>

            <CardSection style={subTitleContainer}>
              <Text style={subTitleSyle}>{distance}</Text>
              <Rating rating={rating} />
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleContainer: {
    paddingBottom: 0
  },
  titleStyle: {
    fontSize: 18,
  },
  subTitleSyle: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  subTitleContainer: {
    paddingTop: 3,
    justifyContent: 'space-between'
  }
};

export default connect(null, { courseDetailsFetch })(CourseListItem);
