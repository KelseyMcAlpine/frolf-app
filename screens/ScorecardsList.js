import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { scorecardsFetch } from '../actions';
// import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, GrayButton, Spinner } from '../components/common';

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
            <Text>{scorecard.details.courseId}</Text>
            <Text>{scorecard.details.currentDate}</Text>
            <Text>{scorecard.details.holes}</Text>
          </View>
        </CardSection>
      );
    });
  }

  render() {
    if ( this.state.loadingScorecards == true ){
      return <Spinner />
    }

    console.log('scorecards:', this.props.scorecards);
    return (
      <ScrollView>
        <Card>
          {this.renderScorecards()}
        </Card>
      </ScrollView>
    )
  }
}

const styles = {
  headerStyle: {
    fontSize: 21,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
}

const mapStateToProps = (state) => {
  const scorecards = _.map(state.scorecardsList.history, (val, uid) => {
    return { ...val, uid };
  });

  return { scorecards };
};

export default connect(mapStateToProps, { scorecardsFetch })(ScorecardsList);
