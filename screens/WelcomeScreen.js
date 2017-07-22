import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A954' },
  { text: 'Set your location', color: '#009688' },
  { text: 'This is the last slide', color: '#03A954' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    // used to clear token temporarily
    // AsyncStorage.removeItem('fb_token');
    const token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    Actions.facebookLogin();
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
