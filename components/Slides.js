import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Button, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title='Login with Facebook'
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    const { slideStyle, slideText, imageStyles, containerStyle } = styles;
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[slideStyle, { backgroundColor: slide.color }]}
        >
          <View style={containerStyle}>
            <Image source={require('../assets/images/scorecard.png')} />
          </View>
          <Text style={slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollsToTop={false}
        indicatorStyle='white'
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  slideText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
  containerStyle: {
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // position: 'relative',
    height: 50,
    width: 50
  },
  imageStyles: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
};

export default Slides;
