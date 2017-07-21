import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { saveScorecard, savePlayers } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { AddPlayerModal } from './AddPlayerModal';

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

  onChangeText() {
  }

  renderPlayers() {
    return this.state.players.map((player, index) => {
      return (
        <CardSection key={index}>
          <Text>{player}</Text>
        </CardSection>
      );
    });
  }

  render() {
    if (!this.props.holeDetails) {
      return (
          <ActivityIndicator size='large' />
      );
    }

    const { holeDetails } = this.props;
    const courseName = holeDetails[0].name;
    const courseHoles = `${(holeDetails.length) - 1} Holes`;

    const { user_image_url, name } = this.props.user_info

    return (
      <Card>
        <CardSection>
          <Text>Players</Text>
        </CardSection>

        {this.renderPlayers()}

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal }) }>
            Add Player
          </Button>
        </CardSection>

        <CardSection>
          <View>
            <Text>Course Details</Text>
            <Text>{courseName}</Text>
            <Text>{courseHoles}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCancelScorecard.bind(this)}>
            Cancel
          </Button>
          <Button onPress={this.onBeginScorecard.bind(this)}>
            Begin Game
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

const mapStateToProps = (state) => {
  const { holeDetails } = state.scorecardForm;
  const { user_info } = state.facebook;
  return { holeDetails, user_info };
};

export default connect(mapStateToProps, { saveScorecard, savePlayers })(ScorecardForm);
