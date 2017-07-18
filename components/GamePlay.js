import React, { Component } from 'react';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';

class GamePlay extends Component {
  saveScorecard() {
    // const { holeDetails } = this.props;
    // const courseId = holeDetails[0].course_id;
    // const holes = (holeDetails.length) - 1;
    // const getDate = new Date();
    // const currentDate = (currentDate.getMonth()+1) + '/'
    //                 + currentDate.getDate() + '/'
    //                 + currentDate.getFullYear();
    //
    // console.log(currentDate);

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
  }
  
  render() {
    console.log('in game play. Hole details:', this.props.holeDetails);
    console.log('in game play. Players: ', this.props.players);
    return (
      <HoleForm />
    );
  }
}

const mapStateToProps = state => {
  const { holeDetails, players } = state.scorecardForm;
  return { holeDetails, players };
};

export default connect(mapStateToProps)(GamePlay);
