import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
// using expo for facebook auth
// does a lot of behind the scenes set up

// token received from facebook is CRITICAL
// want to keep track of whether or not token exisits
// in other parts of application -- REDUX
class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // used to clear token temporarily
    // AsyncStorage.removeItem('fb_token');
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      Actions.courseList();
    }
  }

  render() {
    return (
      <View style={styles.viewStyle} />
    );
  }
}

function mapStateToProps({ facebook }) {
  return {
    token: facebook.token
  };
}

const styles = {
  viewStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);
