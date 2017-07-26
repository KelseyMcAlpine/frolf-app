import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { searchCourses } from '../actions';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, GrayButton } from '../components/common';
import { Slider } from 'react-native-elements';


class CourseSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state: ''
    };
  }

  render() {
    return(
      <Card style={{ flex: 1 }}>
        <CardSection style={{ paddingBottom: 0 }}>
          <Text style={[styles.textStyle, { flex: 2}]}>City</Text>
          <Text style={[styles.textStyle, { flex: 1, marginLeft: 6 }]}>State</Text>
        </CardSection>

        <CardSection>
          <Input
            style={{ flex: 2}}
            placeholder="Seattle"
            onChangeText={(text) => this.setState({ city: text })}
          />
          <Input
            style={{ flex: 1, marginLeft: 6}}
            placeholder="WA"
            autoCapitalize={'characters'}
            onChangeText={(text) => this.setState({ state: text })}
          />
        </CardSection>

        <CardSection style={styles.buttonPadding}>
          <GrayButton onPress={() => Actions.courseList()}>CANCEL</GrayButton>
          <Button style={styles.buttonMargin} onPress={() => this.props.searchCourses(this.state.city, this.state.state, 43.0001, -77.6109, () => Actions.searchResults({ type: 'reset' }) )}>SEARCH</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
  buttonPadding: {
    paddingTop: 60
  },
  buttonMargin: {
    marginLeft: 6
  }
}

export default connect(null, { searchCourses })(CourseSearch);
