import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { Card, CardSection } from './common';

class HoleForm extends Component {

  renderPlayerInputs() {
    const { playerSection, textStyle, headerStyle, scoringSection, label } = styles;

    return this.props.players.map((player, index) => {
      return (
        <View key={index}>
          <CardSection style={playerSection}>
            <View style={{ flex: 1.5 }}>
              <Text style={textStyle}>{player}</Text>
              <Text style={label}>TOTAL {this.props.totalScores[index]}</Text>
            </View>

            <View style={scoringSection}>
              <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => this.props.onDecrementScore(player, index)}>
                <EvilIcons name="minus" size={45} color="rgba(0,0,0,0.2)" />
              </TouchableOpacity>

              <Text style={[headerStyle, { flex: 1, textAlign: 'center' }]}>{this.props.scores[index]}</Text>

              <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => this.props.onIncrementScore(player, index)}>
                <Entypo name="circle-with-plus" size={36} color="rgb(76,217,100)" />
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
    const { label, alignRight, holeFact, holeNum } = styles;
    return (
        <Card style={{ minHeight: 360 }}>
          <CardSection style={{ justifyContent: 'space-between' }}>
            <View>
              <Text style={label}>HOLE</Text>
              <Text style={holeNum}>{currentHole}</Text>
            </View>

            <View style={{ justifyContent: 'flex-end' }}>
              <Text style={[label, alignRight]}>LENGTH</Text>
              <Text style={[holeFact, alignRight]}>{holeDetails[currentHole].tee_1_len}</Text>
              <Text style={[label, alignRight]}>PAR</Text>
              <Text style={[holeFact, alignRight]}>{holeDetails[currentHole].tee_1_par}</Text>
            </View>
          </CardSection>

          {this.renderPlayerInputs()}
        </Card>
    );
  }
}

const styles = {
  label: {
    color: 'rgba(0,0,0,0.5)'
  },
  alignRight: {
    textAlign: 'right',
  },
  holeNum: {
    color: 'rgb(76,217,100)',
    fontSize: 63,
    fontWeight: '600'
  },
  holeFact: {
    color: 'rgb(76,217,100)',
    fontSize: 24,
    fontWeight: '800'
  },
  playerSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#DDD'
  },
  headerStyle: {
    fontSize: 36,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.75)'
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
  scoringSection: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
};

export default HoleForm;
