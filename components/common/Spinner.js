import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  console.log('should be displaying spinner');
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color='#6BD13D'/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
