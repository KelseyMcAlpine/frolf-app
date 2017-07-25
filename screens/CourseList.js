// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { courseListFetch, getUserInfo, courseImagesFetch } from '../actions';
import { Spinner } from '../components/common';
import CourseListItem from '../components/CourseListItem';

class CourseList extends Component {

  constructor() {
    super();

    this.state = {
      coursesLoading: true,
    };
  }

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;

    this.props.getUserInfo(this.props.token, () => {
      this.props.courseListFetch(userLat, userLon);
    });
  }

  componentWillReceiveProps() {
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
    if (this.state.coursesLoading) {
      return <Spinner />;
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

export default connect(mapStateToProps,
  { courseListFetch, getUserInfo, courseImagesFetch })(CourseList);
