import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import HoleForm from './HoleForm';
import { saveScorecard, saveScores } from '../actions';

// TODO:
// - Clear state if game is canceled/left
// - Fix bug with saving hole #18
// - Navigate away from page after saving

class GamePlay extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentHole: 1,
    };

    const scoresState = this.props.players.map((player, index) => {
      const { holeDetails } = this.props;
      const { currentHole } = this.state;
      const defaultScore = parseInt(holeDetails[currentHole].tee_1_par);

      return defaultScore;
    });

    this.state = {
      currentHole: this.state.currentHole,
      scores: scoresState
    };
    console.log('this.state', this.state);
  }

  onIncrement(player, index) {
    console.log('in on increment');
    console.log('this index: ', index);
    // console.log('this player: ', this.player);

    const scores = this.state.scores;

    // console.log('scores: ', scores);
    // console.log('index: ', index);
    scores[index] += 1;
    this.setState({ ...this.state, scores });
  }

  onDecrement(player, index) {
    console.log('in on decrement');
    // console.log('this index: ', this.index);
    // console.log('this player: ', this.player);
  }

  saveScorecard() {
    const { currentHole, scores }  = this.state;
    this.props.saveScores({ currentHole, scores });

    const date = new Date();
    const currentDate = (date.getMonth()+1) + '/'
                    + date.getDate() + '/'
                    + date.getFullYear();

    const scorecardInfo = {
      details: {
        courseId: this.props.holeDetails[0].course_id,
        holes: (this.props.holeDetails.length) - 1,
        currentDate
      },
      players: this.props.players,
      scores: this.props.gameScores
    };
    this.props.saveScorecard({ scorecardInfo });
  }

  onPressNextHole() {
    console.log('state: ', this.state);
    const { currentHole, scores }  = this.state;
    const numOfHoles = (this.props.holeDetails.length) - 1;

    this.props.saveScores({ currentHole, scores });

    if ( currentHole < numOfHoles ) {
      this.setState({
        currentHole: this.state.currentHole + 1
      })
    }
  }

  renderButton() {
    const { currentHole }  = this.state;
    const numOfHoles = (this.props.holeDetails.length) - 1;

    if ( currentHole < numOfHoles ) {
      return (
        <Button onPress={this.onPressNextHole.bind(this)}>Next Hole</Button>
      )
    } else {
      return (
        <Button onPress={this.saveScorecard.bind(this)}>Save Scorecard</Button>
      )
    }
  }


  render() {
    console.log('game play render. scores: ', this.props.gameScores);
    return (
      <View>
        <HoleForm
          currentHole={this.state.currentHole}
          holeDetails={this.props.holeDetails}
          players={this.props.players}
          scores={this.state.scores}
          onIncrementScore={this.onIncrement.bind(this) }
          onDecrementScore={this.onDecrement.bind(this) }
        />
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { holeDetails, players } = state.scorecardForm;
  const { gameScores } = state;
  return { holeDetails, players, gameScores };
};

export default connect(mapStateToProps, { saveScores, saveScorecard })(GamePlay);
