import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Button } from 'react-native';

// dimensions module -- used to get full screen width of device
const SCREEN_WIDTH = Dimensions.get('window').width;

// only want to render button on last slide
// BUTON STYLING GOTCHA:
// accepts Button Styling property NOT style property

// no parenthesis because we dont want to call function
// until user clicks on the button
// onCompolete defined in welcome screen

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
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
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
        showsHorizontalScrollIndicator
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
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
};

export default Slides;
