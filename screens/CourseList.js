// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { courseListFetch, getUserInfo, courseImagesFetch } from '../actions';
import CourseListItem from '../components/CourseListItem';

class CourseList extends Component {

  state = { coursesloading: true };

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;

<<<<<<< HEAD:components/CourseList.js
    this.props.courseListFetch(userLat, userLon, () => { console.log('course list fetch callback'); });
    this.props.getUserInfo(this.props.token);
=======
    this.props.getUserInfo(this.props.token, () => {
      this.props.courseListFetch(userLat, userLon);
    });
>>>>>>> 1f70e752f38283cae52d6cfc637be7583e742544:screens/CourseList.js
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ coursesLoading: false });
  }

  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <CourseListItem key={course.key} course={course} />
      );
    });
  }

  render() {
    if (this.state.coursesLoading){
      return <Text>Loading</Text>
    }

    return (
      <ScrollView style={{ backgroundColor: '#EEEEEE' }}>
        {this.renderCourses()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { courses } = state.courses;
  const { token } = state.facebook;
  return { courses, token };
};

export default connect(mapStateToProps, { courseListFetch, getUserInfo, courseImagesFetch })(CourseList);
