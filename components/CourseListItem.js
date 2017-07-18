import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class CourseListItem extends Component {

  onRowPress() {
    Actions.courseDetails({ courseId: this.props.course.course_id });
  }

  render() {
    const { name, rating } = this.props.course;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card>
            <CardSection>
              <Image source={{ uri: 'https://www.dgcoursereview.com/course_pics/5/710589e1_m.jpg' }} style={styles.imageStyle} />
            </CardSection>

            <CardSection>
              <View>
                <Text>{name}</Text>
                <View>
                  <Text>Distance</Text>
                  <Text>Rating: {rating}</Text>
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

export default CourseListItem;
