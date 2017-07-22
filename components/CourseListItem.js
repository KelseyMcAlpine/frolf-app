import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { courseDetailsFetch } from '../actions';
import { Card, CardSection, ImageSection, Rating } from './common';

class CourseListItem extends Component {

  onRowPress = () => {
    this.props.courseDetailsFetch(this.props.course.course_id, () => { Actions.courseDetails(); });
  }

  render() {
    const { name, rating, image, distance } = this.props.course;
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
                  <Text>Distance {distance}</Text>
                  <Rating rating={rating} />
                </View>
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
};

export default connect(null, { courseDetailsFetch })(CourseListItem);
