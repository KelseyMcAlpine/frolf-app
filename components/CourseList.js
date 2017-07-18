// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { courseListFetch } from '../actions';
import CourseListItem from './CourseListItem';

class CourseList extends Component {

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;
    this.props.courseListFetch({ userLat, userLon });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ courses }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(courses);
  }

  renderRow(course) {
    return <CourseListItem course={course} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const { courses } = state.courses;
  return { courses };
};

export default connect(mapStateToProps, { courseListFetch })(CourseList);
