import React, { Component } from 'react';
import { ScrollView, Alert} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button, GrayButton } from '../components/common';
import HoleForm from '../components/HoleForm';
import { saveScorecard, saveScores, clearScores } from '../actions';

// TODO: Clear state if game is canceled/left

class GamePlay extends Component {

  constructor(props) {
    super(props);

    const defaultScores = this.props.players.map(() => {
      return 0;
    });

    const defaultTotalScores = this.props.players.map(() => {
      return 0;
    });

    this.state = {
      currentHole: 1,
      scores: defaultScores,
      totalScores: defaultTotalScores
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
    const { scores, totalScores } = this.state;

    scores[index] += 1;
    totalScores[index] += 1;

    this.setState({ ...this.state, scores, totalScores });
  }

  onDecrement(player, index) {
    const scores = this.state.scores;
    const totalScores = this.state.totalScores;

    if (scores[index] > 1) {
      scores[index] -= 1;
      totalScores[index] -= 1;

      this.setState({ ...this.state, scores, totalScores });
    };
  }

  onPressNextHole() {
    const { currentHole, scores } = this.state;

    this.props.saveScores({ currentHole, scores }, () => {
      this.setDefaultScore();
    });
  }

  setDefaultScore() {
    const numOfHoles = (this.props.holeDetails.length) - 1;
    const nextHole = this.state.currentHole + 1;
    const { currentHole } = this.state;
    const { holeDetails } = this.props;

    const defaultScores = this.props.players.map(() => {
      return 0;
    });

    if (currentHole < numOfHoles) {
      this.setState({
        currentHole: nextHole,
        scores: defaultScores
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
    const { currentHole, scores } = this.state;
    const numOfHoles = (this.props.holeDetails.length) - 1;
    if (scores.includes(0)) {
      return (
        <GrayButton onPress={() => Alert.alert(
          'Please Enter a Score',
          'Scores for all users must be entered before moving on to the next hole.',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )}>
          NEXT HOLE
        </GrayButton>
      )
    }
    if (currentHole < numOfHoles) {
      return (
        <Button onPress={this.onPressNextHole.bind(this)}>
          NEXT HOLE
        </Button>
      );
    }
    return (
      <Button onPress={this.onPressNextHole.bind(this)}>
        SAVE SCORECARD
      </Button>
    );
  }


  render() {
    const { buttonPadding } = styles;
    const { holeDetails, players } = this.props;
    const { currentHole, scores, totalScores } = this.state;

    return (
      <ScrollView>
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
      </ScrollView>
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
