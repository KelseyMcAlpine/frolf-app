import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ rating }) => {
  let displayRating = [];
  let starNum = 1;

  const wholeStars = Math.floor(rating);
  const halfStars = ( rating - wholeStars >= .5 ? 1 : 0 );
  const emptyStars = ( 5 - wholeStars - halfStars );

  for (let i = 0; i < wholeStars; i++) {
    displayRating.push(
      <FontAwesome name="star" size={32} color="green" key={starNum} />
    );
    starNum += 1;
  }

  for (let i = 0; i < halfStars; i++) {
    displayRating.push(
      <FontAwesome name="star-half-full" size={32} color="green" key={starNum} />
    );
    starNum += 1;
  }

  for (let i = 0; i < emptyStars; i++) {
    displayRating.push(
      <FontAwesome name="star-o" size={32} color="green" key={starNum} />
    );
    starNum += 1;
  }

  return (
    <View style={styles.starRatingContainer}>
      {displayRating}
    </View>
  );
};

const styles = {
  starRatingContainer: {
    height: 40,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export { Rating };
