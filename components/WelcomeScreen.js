import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage, Text } from 'react-native';
import Slides from './Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A954' },
  { text: 'Set your location', color: '#009688' },
  { text: 'This is the last slide', color: '#03A954' }
];

class WelcomeScreen extends Component {
  // component level state
  state = { token: null }

  async componentWillMount() {
    // used to clear token temporarily
    // AsyncStorage.removeItem('fb_token');
    const token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  // programatic navigation
  onSlidesComplete = () => {
    Actions.login();
  }

  // instead of this.onSlidesComplete.bind(this) can also use an arrow function
  render() {
    console.log('render in welcome screen');
    if (_.isNull(this.state.token)) {
      return <Text>App loading</Text>
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
