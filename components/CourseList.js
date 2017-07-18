// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { courseListFetch } from '../actions';
import CourseListItem from './CourseListItem';

class CourseList extends Component {
  state = { coursesloading: true };

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;
    console.log('component will mount props', this.props);
    this.props.courseListFetch(() => { console.log(' course list fetch callback'); });
    // this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ coursesLoading: false });
    console.log('next props', nextProps);
  }

  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <CourseListItem key={ course.course_id } course={ course } />
      );
    });
  }


  render() {
    console.log('render props', this.props);

    if (this.coursesLoading){
      console.log('>>>>>>>>>>>>>>>>>>>>')
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
  return { courses };
};

export default connect(mapStateToProps, { courseListFetch })(CourseList);
