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
    const { label, holeFact, textStyle } = styles;
    return this.props.scorecards.map(scorecard => {
      return (
        <Card key={scorecard.uid}>
          <CardSection>
            <View>
              <Text style={label}>{scorecard.details.date}</Text>
              <Text style={holeFact}>{scorecard.details.courseName}</Text>
              <Text style={textStyle}>{scorecard.details.city}, {scorecard.details.state}</Text>
            </View>
          </CardSection>
        </Card>
      );
    });
  }

  render() {
    if (this.state.loadingScorecards) {
      return <Spinner />;
    }

    return (
      <ScrollView>
        {this.renderScorecards()}
      </ScrollView>
    );
  }
}

const styles = {
  label: {
    color: 'rgba(0,0,0,0.5)'
  },
  holeFact: {
    color: 'rgb(76,217,100)',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 12
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
};


const mapStateToProps = (state) => {
  const scorecards = _.map(state.scorecardsList.history, (val, uid) => {
    return { ...val, uid };
  });

  return { scorecards };
};

export default connect(mapStateToProps, { scorecardsFetch })(ScorecardsList);
