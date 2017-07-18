import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { saveScorecard, savePlayers } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class ScorecardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: '',
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
    // const { holeDetails } = this.props;
    // const courseId = holeDetails[0].course_id;
    // const holes = (holeDetails.length) - 1;
    // const currentDate = new Date();
    // const datetime = currentDate.getDate() + '/'
    //                 + (currentDate.getMonth()+1)  + '/'
    //                 + currentDate.getFullYear() + ' @ '
    //                 + currentDate.getHours() + ':'
    //                 + currentDate.getMinutes() + ':'
    //                 + currentDate.getSeconds();
    //
    // console.log(datetime);
    //
    // const scorecardInfo = {
    //   details: {
    //     courseId,
    //     holes,
    //     datetime
    //   },
    //   playerNames: {
    //     player1,
    //     player2,
    //     player3,
    //     player4,
    //   }
    // };

    // this.props.saveScorecard({ scorecardInfo });
    this.props.savePlayers({ players })
    Actions.gamePlay();
  }

  render() {
    if (!this.props.holeDetails) {
      return (
          <Spinner />
      );
    }

    const { holeDetails } = this.props;
    const name = holeDetails[0].name;
    const holes = (holeDetails.length) - 1;

    console.log('hole details: ', holeDetails);
    return (
      <Card>
        <CardSection>
          <Text>Players</Text>
        </CardSection>

        <CardSection>
          <Input
            label="Player 1"
            placeholder="Ada Lovelace"
            value={this.state.player1}
            onChangeText={player1 => this.setState({ player1 })}
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
            <Text>{name}</Text>
            <Text>{holes} Holes</Text>
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
  return { holeDetails };
};

export default connect(mapStateToProps, { saveScorecard, savePlayers })(ScorecardForm);
