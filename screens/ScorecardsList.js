import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { scorecardsFetch } from '../actions';
import { Card, CardSection, Spinner } from '../components/common';

class ScorecardsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loadingScorecards: true,
    };
  }

  componentWillMount() {
    this.props.scorecardsFetch();
  }

  componentWillReceiveProps() {
    this.setState({ loadingScorecards: false });
  }

  renderScorecards() {
    return this.props.scorecards.map(scorecard => {
      return (
        <CardSection key={scorecard.uid}>
          <View>
            <Text>{scorecard.details.courseName}</Text>
            <Text>{scorecard.details.city}</Text>
            <Text>{scorecard.details.state}</Text>
            <Text>{scorecard.details.date}</Text>
            <Text>{scorecard.details.holes}</Text>
            <Text>{scorecard.details.players}</Text>
            <Text>{scorecard.details.scores}</Text>
          </View>
        </CardSection>
      );
    });
  }

  render() {
    if (this.state.loadingScorecards) {
      return <Spinner />;
    }

    return (
      <ScrollView>
        <Card>
          {this.renderScorecards()}
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const scorecards = _.map(state.scorecardsList.history, (val, uid) => {
    return { ...val, uid };
  });

  return { scorecards };
};

export default connect(mapStateToProps, { scorecardsFetch })(ScorecardsList);
