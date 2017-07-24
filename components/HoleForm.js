import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { Entypo, EvilIcons } from '@expo/vector-icons';

class HoleForm extends Component {

  renderPlayerInputs() {
    return this.props.players.map((player, index) => {
      return (
        <View key={index} >
          <CardSection style={{ justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderColor: '#DDD' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textStyle}>{player}</Text>
            </View>
            <View style={{ flex: 1, flexWrap: 'nowrap', flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => this.props.onDecrementScore(player, index)}>
                <EvilIcons name="minus" size={45} color="rgba(0,0,0,0.5)" />
              </TouchableOpacity>
              <Text style={styles.headerStyle}>{this.props.scores[index]}</Text>
              <TouchableOpacity onPress={() => this.props.onIncrementScore(player, index)}>
                <Entypo name="circle-with-plus" size={36} color="#6BD13D" />
              </TouchableOpacity>
            </View>
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
          <CardSection style={{ justifyContent: 'space-between' }}>
            <View>
              <Text>HOLE</Text>
              <Text>{currentHole}</Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              <Text>LENGTH</Text>
              <Text>{holeDetails[currentHole].tee_1_len}</Text>
              <Text>PAR</Text>
              <Text>{holeDetails[currentHole].tee_1_par}</Text>
            </View>
          </CardSection>

          {this.renderPlayerInputs()}
        </Card>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 36,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.5)'
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
}

export default HoleForm;
