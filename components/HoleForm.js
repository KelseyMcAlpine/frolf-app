import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class HoleForm extends Component {

  renderPlayerInputs() {
    return this.props.players.map((player, index) => {
      return (
        <View key={index}>
          <CardSection>
            <Text>{player}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.props.onIncrementScore(player, index)}>+</Button>
            <Text>Score: {this.props.scores[index]}</Text>
            <Button onPress={() => this.props.onDecrementScore(player, index)}>-</Button>
          </CardSection>
        </View>
      );
    });
  }

  render() {
    const currentHole = this.props.currentHole;
    const holeDetails = this.props.holeDetails;

    return (
        <Card>
          <CardSection>
            <Text>HOLE: {currentHole}</Text>
          </CardSection>

          <CardSection>
            <Text>TEE LENGTH: {holeDetails[currentHole].tee_1_len}</Text>
          </CardSection>

          <CardSection>
            <Text>PAR: {holeDetails[currentHole].tee_1_par}</Text>
          </CardSection>

          {this.renderPlayerInputs()}
        </Card>
    );
  }
}

export default HoleForm;
