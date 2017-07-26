import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import { Button, Card, CardSection } from './common';
// onAccept, onDecline
// const GameSummaryModal = ({ visible, onAccept, players, totalScores }) => {

class GameSummaryModal extends Component {
  renderScores() {
    const { players, totalScores } = this.props;
    const winners = [];

    for (let i = 0; i < players.length; i++) {
      winners.push({
        player: players[i],
        score: totalScores[i]
      });
    }

    winners.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      }
      return 0;
    });

    return winners.map((playerObject) => {
      return (
        <CardSection style={styles.scoreSection} key={playerObject.player}>
          <Text style={styles.textStyle}>{playerObject.player}</Text>
          <Text style={[styles.textStyle, { fontWeight: '800' }]}>{playerObject.score}</Text>
        </CardSection>
      );
    });
  }

  render() {
    const { visible, onAccept } = this.props;
    const { containerStyle, headingStyle, buttonSection } = styles;

    return (
      <Modal
        animationType="none"
        onRequestClose={() => {}}
        transparent
        visible={visible}
      >
        <View style={containerStyle}>
          <Card style={{ backgroundColor: 'transparent', shadowOpacity: 0 }}>
            <Text style={headingStyle}>final scores</Text>

            {this.renderScores()}

            <CardSection style={buttonSection}>
              <Button onPress={onAccept} style={{ borderColor: 'white', borderWidth: 2 }}>
                CLOSE
              </Button>
            </CardSection>
          </Card>
        </View>
      </Modal>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgb(76, 217, 100)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingStyle: {
    color: 'white',
    paddingTop: 66,
    fontSize: 60,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 15
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  scoreSection: {
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: '#FFF',
    backgroundColor: 'transparent',
  },
  buttonSection: {
    backgroundColor: 'transparent',
    marginTop: 60
  }
};

export default GameSummaryModal;
