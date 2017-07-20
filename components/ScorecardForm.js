import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { saveScorecard, savePlayers } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class ScorecardForm extends Component {
  constructor(props) {
    super(props);

    const user = props.user_info.name

    this.state = {
      player1: user,
      player2: '',
      player3: '',
      player4: ''
    };
  }

  onCancelScorecard() {
    console.log('in cancel scorecard button');
  }

  onBeginScorecard() {
    const { player1, player2, player3, player4, } = this.state;
    const players = { player1, player2, player3, player4 };

    this.props.savePlayers({ players })
    Actions.gamePlay();
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

        <CardSection>
          <Input
            label="Player 1"
            placeholder={name}
            value={name}
            editable='false'
          />
        </CardSection>

        <CardSection>
          <Input
            label="Player 2"
            placeholder="Grace Hopper"
            value={this.state.player2}
            onChangeText={player2 => this.setState({ player2 })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Player 3"
            placeholder="Someone Else"
            value={this.state.player3}
            onChangeText={player3 => this.setState({ player3 })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Player 4"
            placeholder="Ada Lovelace"
            value={this.state.player4}
            onChangeText={player4 => this.setState({ player4 })}
          />
        </CardSection>

        <CardSection>
          <View>
            <Text>Course Details</Text>
            <Text>{courseName}</Text>
            <Text>{courseHoles}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCancelScorecard.bind(this)}>Cancel</Button>
          <Button onPress={this.onBeginScorecard.bind(this)}>Begin Game</Button>
        </CardSection>

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
