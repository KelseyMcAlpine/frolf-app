import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Spinner } from '../components/common';
import CourseListItem from '../components/CourseListItem';

class SearchResults extends Component {
  
  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <CourseListItem key={course.key} course={course} />
      );
    });
  }

  render() {
    console.log('coures', this.props.courses);
    if (!this.props.courses) {
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
  const { courses } = state.search;
  return { courses };
};

export default connect(mapStateToProps, null)(SearchResults);
