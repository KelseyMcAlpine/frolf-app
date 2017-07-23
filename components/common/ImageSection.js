import React from 'react';
import { View, Image } from 'react-native';

const ImageSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={{ uri: props.imageURL }} style={styles.imageStyle} />
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 9,
    paddingLeft: 9,
    paddingRight: 9,
    backgroundColor: '#fff',
    height: 200
  },
  imageStyle: {
    flex: 1,
    width: null,
  },
};

export { ImageSection };
