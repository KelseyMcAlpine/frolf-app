import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Search for Courses', color: '#6BD13D' },
  { text: 'Create Scorecards', color: '#6BD13D' },
  { text: 'Track Your Progress', color: '#6BD13D' },
  { text: 'Get Sarted', color: '#6BD13D' }
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
