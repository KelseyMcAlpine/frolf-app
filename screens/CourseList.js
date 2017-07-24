// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { courseListFetch, getUserInfo, courseImagesFetch } from '../actions';
import { Spinner } from '../components/common';
import CourseListItem from '../components/CourseListItem';
import { SideMenu } from 'react-native-elements';

class CourseList extends Component {

  constructor() {
    super();

    this.state = {
      coursesloading: true,
    }
  }

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;

    this.props.getUserInfo(this.props.token, () => {
      this.props.courseListFetch(userLat, userLon);
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('receiving props. should reset courses loading to false');
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
    console.log('1. this.state.coursesLoading:', this.state.coursesloading);
    if (this.state.coursesLoading === true ){
      return <Spinner />
    }

    console.log('2. this.state.coursesLoading:', this.state.coursesLoading);
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
