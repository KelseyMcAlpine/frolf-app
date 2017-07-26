import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { MaterialIcons } from '@expo/vector-icons';
import { saveScorecard, savePlayers } from '../actions';
import { Card, CardSection, Button, GrayButton, Spinner } from '../components/common';
import { AddPlayerModal } from '../components/AddPlayerModal';

class ScorecardForm extends Component {
  constructor(props) {
    super(props);

    const user = props.user_info.name;

    this.state = {
      showModal: false,
      playerCount: 1,
      players: [user],
      addPlayerForm: null
    };
  }

  onCancelScorecard() {
    Actions.courseList({ type: 'reset' });
  }

  onBeginScorecard() {
    const { players } = this.state;

    this.props.savePlayers({ players });

    Actions.gamePlay();
  }

  onAddPlayer() {
    const playersArray = this.state.players.slice();

    playersArray.push(this.state.addPlayerForm);

    this.setState({
      addPlayerForm: null,
      showModal: false,
      players: playersArray
    });
  }

  onCancelAddPlayer() {
    this.setState({
      addPlayerForm: null,
      showModal: false
    });
  }

  renderPlayers() {
    const { textStyle, playerCardStyle } = styles;

    return this.state.players.map((player, index) => {
      return (
        <CardSection key={index} style={playerCardStyle}>
          <Text style={textStyle}>{player}</Text>
        </CardSection>
      );
    });
  }

  render() {
    if (!this.props.holeDetails) {
      return <Spinner />;
    }

    const { holeDetails } = this.props;
    const courseName = holeDetails[0].name;
    const courseHoles = `${(holeDetails.length) - 1} Holes`;
    const {
      headerStyle,
      iconAndText,
      courseDetailsSection,
      textStyle,
      buttonMargin,
      buttonPadding
    } = styles;
    // <TouchableOpacity onPress={() => Actions.contactList() } >
    return (
      <ScrollView>
        <Card>
          <CardSection style={iconAndText}>
            <Text style={headerStyle}>Players</Text>
            <TouchableOpacity onPress={() => this.setState({ showModal: !this.state.showModal })} >
              <MaterialIcons
                name="person-add"
                size={24}
                color="rgb(76,217,100)"
              />
            </TouchableOpacity>
          </CardSection>

          {this.renderPlayers()}

          <CardSection style={courseDetailsSection}>
            <Text style={headerStyle}>Course Details</Text>
          </CardSection>

          <CardSection>
            <View>
              <Text style={textStyle}>{courseName}</Text>
              <Text style={textStyle}>{courseHoles}</Text>
              <Text style={textStyle}>Tee 1</Text>
            </View>
          </CardSection>

          <CardSection style={buttonPadding}>
            <GrayButton onPress={this.onCancelScorecard.bind(this)} >
              CANCEL
            </GrayButton>
            <Button onPress={this.onBeginScorecard.bind(this)} style={buttonMargin}>
              BEGIN GAME
            </Button>
          </CardSection>

          <AddPlayerModal
            visible={this.state.showModal}
            onAccept={this.onAddPlayer.bind(this)}
            onDecline={this.onCancelAddPlayer.bind(this)}
            onChangeText={text => this.setState({ addPlayerForm: text })}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 21,
    fontWeight: '600',
  },
  buttonPadding: {
    paddingTop: 60
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
  playerCardStyle: {
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  iconAndText: {
    justifyContent: 'space-between'
  },
  courseDetailsSection: {
    paddingTop: 24,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  buttonMargin: {
    marginLeft: 6
  }
};

const mapStateToProps = (state) => {
  const { holeDetails } = state.scorecardForm;
  const { user_info } = state.facebook;
  return { holeDetails, user_info };
};

export default connect(mapStateToProps, { saveScorecard, savePlayers })(ScorecardForm);
