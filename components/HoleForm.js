import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input } from './common';

class HoleForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      score: [
        this.props.holeDetails[this.props.currentHole].tee_1_par,
        this.props.holeDetails[this.props.currentHole].tee_1_par,
        this.props.holeDetails[this.props.currentHole].tee_1_par,
        this.props.holeDetails[this.props.currentHole].tee_1_par
      ]
    };
  }

  renderPlayerInputs() {
    return this.props.players.map((player, index) => {
      return (
          <CardSection key={index}>
            <Text>{player}</Text>
            <Text>Score: {this.state.score[index]}</Text>
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
