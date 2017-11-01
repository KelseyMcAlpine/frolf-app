import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage, Text, View, Dimensions } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    heading: 'Search for Courses',
    color: 'rgb(76,217,100)',
    imageURL: require('../images/map2.png')
  },
  {
    heading: 'Create Scorecards',
    color: 'rgb(76,217,100)',
    imageURL: require('../images/scorecard2.png')
  },
  {
    heading: 'Track Your Progress',
    color: 'rgb(76,217,100)',
    imageURL: require('../images/basket2.png')
  },
  {
    heading: 'Get Started',
    color: 'rgb(76,217,100)',
    imageURL: require('../images/frisbee2.png')
  }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    // used to clear token temporarily
    AsyncStorage.removeItem('fb_token');
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
      <View style={styles.containter}>
        <Text style={styles.logo}>frolf</Text>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
  containter: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: SCREEN_WIDTH,
    backgroundColor: 'rgb(76,217,100)'
  },
  logo: {
    color: 'white',
    paddingTop: 66,
    fontSize: 60,
    fontWeight: '800',
    textAlign: 'center'
  }
};

export default WelcomeScreen;
