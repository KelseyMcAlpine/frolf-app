import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// touchable opacity -- change in opacity provides feedback for user
// onPress optional prop will call a callback function
// when pressed (from album details) could have been called whatever!
// typically called onPress but wanted to see distinction
const GrayButton = ({ onPress, children }) => {
  const { buttonStyle, TextStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={TextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  TextStyle: {
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.5)',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { GrayButton };
