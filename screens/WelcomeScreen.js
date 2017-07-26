import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    text: 'Search for Courses',
    color: 'rgb(76,217,100)',
  },
  {
    text: 'Create Scorecards',
    color: 'rgb(76,217,100)',
  },
  {
    text: 'Track Your Progress',
    color: 'rgb(76,217,100)',
  },
  {
    text: 'Get Sarted',
    color: 'rgb(76,217,100)',
  }
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
