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
            <ImageSection imageURL='https://www.dgcoursereview.com/course_pics/5/710589e1_m.jpg' />

            <CardSection style={{ borderBottomWidth: 0 }}>
              <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>

            <CardSection style={{ justifyContent: 'space-between', paddingTop: 3 }}>
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
