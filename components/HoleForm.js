import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input } from './common';

class HoleForm extends Component {
  renderPlayerInputs() {
    return this.props.players.map((player, index) => {
      console.log('in hole form. player: ', player);
      console.log('in hole form. index: ', index);
      return (
          <CardSection key={index} style={{ flexDirection: 'row', flex: 1 }}>
            <Text>{player}</Text>
          </CardSection>
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
