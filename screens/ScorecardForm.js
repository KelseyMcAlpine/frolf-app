import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { saveScorecard, savePlayers } from '../actions';
import { Card, CardSection, Input, Button, GrayButton, Spinner } from '../components/common';
import { AddPlayerModal } from '../components/AddPlayerModal';
import { MaterialIcons } from '@expo/vector-icons';

class ScorecardForm extends Component {
  constructor(props) {
    super(props);

    const user = props.user_info.name

    this.state = {
      showModal: false,
      playerCount: 1,
      players: [user],
      addPlayerForm: null
    };
  }

  onCancelScorecard() {
    console.log('in cancel scorecard button');
  }

  onBeginScorecard() {
    const { players } = this.state;

    this.props.savePlayers({ players })
    Actions.gamePlay();
  }

  onAddPlayer() {
    const playersArray = this.state.players.slice()
    playersArray.push(this.state.addPlayerForm);

    this.setState({ addPlayerForm: null, showModal: false, players: playersArray });
  }

  onCancelAddPlayer() {
    this.setState({ addPlayerForm: null, showModal: false });
  }

  renderPlayers() {
    return this.state.players.map((player, index) => {
      return (
        <CardSection key={index} style={{ borderTopWidth: 1, borderColor: '#ddd' }}>
          <Text style={styles.textStyle}>{player}</Text>
        </CardSection>
      );
    });
  }

  render() {
    if (!this.props.holeDetails) { return <Spinner /> }

    const { holeDetails } = this.props;
    const courseName = holeDetails[0].name;
    const courseHoles = `${(holeDetails.length) - 1} Holes`;

    const { user_image_url, name } = this.props.user_info

    return (
        <Card>
          <CardSection style={{ justifyContent: 'space-between' }}>
            <Text style={styles.headerStyle}>Players</Text>
            <TouchableOpacity onPress={() => this.setState({ showModal: !this.state.showModal })} >
              <MaterialIcons name="person-add" size={24} color="#6BD13D" />
            </TouchableOpacity>
          </CardSection>

          {this.renderPlayers()}

          <CardSection style={{ paddingTop: 24, borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Text style={styles.headerStyle}>Course Details</Text>
          </CardSection>

          <CardSection>
            <View>
              <Text style={styles.textStyle}>{courseName}</Text>
              <Text style={styles.textStyle}>{courseHoles}</Text>
              <Text style={styles.textStyle}>Tee 1</Text>
            </View>
          </CardSection>

          <CardSection>
            <GrayButton onPress={this.onCancelScorecard.bind(this)} style={{ marginRight: 9 }}>
              CANCEL
            </GrayButton>
            <Button onPress={this.onBeginScorecard.bind(this)} style={{ marginLeft: 9 }}>
              BEGIN GAME
            </Button>
          </CardSection>

          <AddPlayerModal
            visible={this.state.showModal}
            onAccept={this.onAddPlayer.bind(this)}
            onDecline={this.onCancelAddPlayer.bind(this)}
            onChangeText={text => this.setState({ addPlayerForm: text })}
            />
        </Card>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 21,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
}

const mapStateToProps = (state) => {
  const { holeDetails } = state.scorecardForm;
  const { user_info } = state.facebook;
  return { holeDetails, user_info };
};

export default connect(mapStateToProps, { saveScorecard, savePlayers })(ScorecardForm);
