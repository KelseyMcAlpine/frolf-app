// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { courseListFetch, getUserInfo, courseImagesFetch } from '../actions';
import CourseListItem from './CourseListItem';

class CourseList extends Component {

  state = { coursesloading: true };

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;

    this.props.getUserInfo(this.props.token, () => {
      this.props.courseListFetch();
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ coursesLoading: false });
  }

  renderCourses() {
    console.log('courses: ', this.props.courses);
    console.log('finished loading courses');
    return this.props.courses.map(course => {
      return (
        <CourseListItem key={ course.course_id } course={ course } />
      );
    });
  }


  render() {
    if (this.state.coursesLoading){
      return <Text>Loading</Text>
    }

    return (
      <ScrollView>
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
