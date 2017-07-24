// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { courseListFetch, getUserInfo, courseImagesFetch } from '../actions';
import CourseListItem from '../components/CourseListItem';
import { SearchBar } from 'react-native-elements';

class CourseList extends Component {

  state = {
    coursesloading: true,
    searchTerm: ''
  };

  componentWillMount() {
    const userLat = 43.0001;
    const userLon = -77.6109;

    this.props.getUserInfo(this.props.token, () => {
      this.props.courseListFetch(userLat, userLon);
    });
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
        <SearchBar
          containerStyle={{ backgroundColor: '#FFF', borderTopWidth: 0, borderBottomWidth: 0 }}
          inputStyle={{ borderColor: '#6BD13D', borderWidth: 1, backgroundColor: '#FFF'}}
          onChangeText={(text) => this.setState({ searchTerm: text }) }
          placeholder='Search by location'
        />
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
