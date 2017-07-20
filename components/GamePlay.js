import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import HoleForm from './HoleForm';
import { saveScorecard } from '../actions';

class GamePlay extends Component {

  constructor(){
    super()
    this.state = {
      currentHole: 1,
      score: {}
    }
  }

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

  onPressNextHole() {
    const { currentHole }  = this.state;
    const numOfHoles = (this.props.holeDetails.length) - 1;
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
        <Button title="next holes" onPress={this.onPressNextHole.bind(this)} />
      )
    } else {
      return (
        <Button title="save scorecard" onPress={this.saveScorecard.bind(this)} />
      )
    }
  }


  render() {
    console.log('in render game play. current hole:', this.state.currentHole);
    return (
      <View>
        <HoleForm
          currentHole={this.state.currentHole}
          holeDetails={this.props.holeDetails}
        />
        <Card>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { holeDetails, players } = state.scorecardForm;
  return { holeDetails, players };
};

export default connect(mapStateToProps, { saveScorecard })(GamePlay);
