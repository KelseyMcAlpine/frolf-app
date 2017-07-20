import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';
import { saveScorecard } from '../actions';

class GamePlay extends Component {
  saveScorecard() {
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
      playerNames: this.props.players,
      // scores
    };
    console.log('scorecard info: ', scorecardInfo);
    this.props.saveScorecard({ scorecardInfo });
  }

  render() {
    return (
      <View>
        <HoleForm currentHole={1} />
        <Button title="save scorecard" onPress={this.saveScorecard.bind(this)} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { holeDetails, players } = state.scorecardForm;
  return { holeDetails, players };
};

export default connect(mapStateToProps, { saveScorecard })(GamePlay);
