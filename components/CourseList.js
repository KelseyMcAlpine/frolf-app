// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { courseListFetch, getUserInfo } from '../actions';
import CourseListItem from './CourseListItem';

class CourseList extends Component {

  state = { coursesloading: true };

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;

    // could reverse the order of these two.
    // get user info first then have course list fetch as callback
    this.props.courseListFetch(() => { console.log('course list fetch callback'); });
    this.props.getUserInfo(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ coursesLoading: false });
  }

  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <CourseListItem key={ course.course_id } course={ course } />
      );
    });
  }


  render() {
    if (this.coursesLoading){
      return <ActivityIndicator size='large' />
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

export default connect(mapStateToProps, { courseListFetch, getUserInfo })(CourseList);
