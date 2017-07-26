import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Button, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
    const { slideStyle, slideHeading, iconContainer, imageStyle } = styles;
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.heading}
          style={[slideStyle, { backgroundColor: slide.color }]}
        >
          <View style={iconContainer}>
            <Image source={slide.imageURL} style={imageStyle} />
          </View>
          <Text style={slideHeading}>{slide.heading}</Text>
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
    justifyContent: 'flex-start',
    marginTop: 60,
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  slideHeading: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
  iconContainer: {
    marginBottom: 36,
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 500,
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    flex: 1,
    width: 200,
    height: 200
  }
};

export default Slides;
