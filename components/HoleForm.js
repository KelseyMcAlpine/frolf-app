import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input } from './common';

class HoleForm extends Component {
  renderPlayerInputs() {
    return this.props.players.map((player, index) => {
      return (
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Text>Player</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={console.log('value changed')}
            style={{ flex: 1 }}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
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

        <CardSection>
          {this.renderPlayerInputs()}
        </CardSection>
      </Card>
    );
  }
}

export default HoleForm;
