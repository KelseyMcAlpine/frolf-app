import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>FB Auth Page</Text>
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    token: auth.token
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

export default connect(mapStateToProps, actions)(AuthScreen);
