import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../components/common';
import HoleForm from '../components/HoleForm';
import { saveScorecard, saveScores, clearScores } from '../actions';

// TODO: Clear state if game is canceled/left

class GamePlay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentHole: 1,
    };

    const scoresState = this.props.players.map(() => {
      const { holeDetails } = this.props;
      const { currentHole } = this.state;
      const defaultScore = parseInt(holeDetails[currentHole].tee_1_par, 10);

      return defaultScore;
    });

    const defaultScores = this.props.players.map(() => {
      return 0;
    });

    this.state = {
      currentHole: this.state.currentHole,
      scores: scoresState,
      totalScores: defaultScores
    };
  }

  componentWillReceiveProps(nextProps) {
    const lastHoleNum = this.props.holeDetails.length - 1;
    const lastHole = `hole_${lastHoleNum}`;
    const isLastHole = nextProps.gameScores.hasOwnProperty(lastHole);

    if (isLastHole) {
      this.saveScorecard(nextProps);
    }
  }

  onIncrement(player, index) {
    const scores = this.state.scores;
    scores[index] += 1;
    this.setState({ ...this.state, scores });
  }

  onDecrement(player, index) {
    const scores = this.state.scores;
    scores[index] -= 1;
    this.setState({ ...this.state, scores });
  }

  onPressNextHole() {
    const { currentHole, scores } = this.state;

    this.props.saveScores({ currentHole, scores }, () => {
      const updatedTotals = this.state.scores.map((score, index) => {
        return this.state.totalScores[index] + score;
      });

      this.setState({ totalScores: updatedTotals })
    });

    this.setDefaultScore();
  }

  setDefaultScore() {
    const numOfHoles = (this.props.holeDetails.length) - 1;
    const nextHole = this.state.currentHole + 1;
    const { currentHole } = this.state;
    const { holeDetails } = this.props;

    const scoresState = this.props.players.map(() => {
      const defaultScore = parseInt(holeDetails[currentHole].tee_1_par, 10);

      return defaultScore;
    });

    if (currentHole < numOfHoles) {
      this.setState({
        currentHole: nextHole,
        scores: scoresState
      });
    }
  }

  saveScorecard(nextProps) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${month}/${day}/${year}`;

    const scorecardInfo = {
      details: {
        courseId: this.props.holeDetails[0].course_id,
        holes: (this.props.holeDetails.length) - 1,
        courseName: this.props.holeDetails[0].name,
        city: this.props.holeDetails[0].city,
        state: this.props.holeDetails[0].state,
        date: currentDate
      },
      players: this.props.players,
      scores: nextProps.gameScores
    };
    this.props.saveScorecard({ scorecardInfo }, () => this.props.clearScores());
  }

  renderButton() {
    const { currentHole } = this.state;
    const numOfHoles = (this.props.holeDetails.length) - 1;

    if (currentHole < numOfHoles) {
      return (
        <Button onPress={this.onPressNextHole.bind(this)}>
          Next Hole
        </Button>
      );
    }
    return (
      <Button onPress={this.onPressNextHole.bind(this)}>
        Save Scorecard
      </Button>
    );
  }


  render() {
    const { buttonPadding } = styles;
    const { holeDetails, players } = this.props;
    const { currentHole, scores, totalScores } = this.state;

    return (
      <View>
        <HoleForm
          currentHole={currentHole}
          holeDetails={holeDetails}
          players={players}
          scores={scores}
          totalScores={totalScores}
          onIncrementScore={this.onIncrement.bind(this)}
          onDecrementScore={this.onDecrement.bind(this)}
        />
        <CardSection style={buttonPadding}>
          {this.renderButton()}
        </CardSection>
      </View>
    );
  }
}

const styles = {
  buttonPadding: {
    paddingTop: 60
  }
};

const mapStateToProps = state => {
  const { holeDetails, players } = state.scorecardForm;
  const { gameScores } = state;
  return { holeDetails, players, gameScores };
};

export default connect(mapStateToProps, { saveScores, saveScorecard, clearScores })(GamePlay);
