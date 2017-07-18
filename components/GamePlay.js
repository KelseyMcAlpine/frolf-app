import React, { Component } from 'react';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';

class GamePlay extends Component {
  render() {
    console.log('in game play. Holedetails:', this.props.holeDetails);
    console.log('in game plat. PLayers: ', this.props.players);
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
