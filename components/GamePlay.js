import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import HoleForm from './HoleForm';
import { saveScorecard, saveScores } from '../actions';

class GamePlay extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentHole: 1,
    };

    // this.props.holeDetails[this.state.currentHole].tee_1_par,
    this.state = {
      currentHole: this.state.currentHole,
      scores: [ 4, 7, 9, 100 ]
    };
  }

  saveScorecard() {
    const { currentHole, scores }  = this.state;
    this.props.saveScores({ currentHole, scores });

    // todo -- bug with saving hole #18

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
    console.log('Save scorecard. scorecard info: ', scorecardInfo);
    this.props.saveScorecard({ scorecardInfo });
    // navigate away from page after saving
  }

  onPressNextHole() {
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
