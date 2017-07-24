import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, GrayButton } from '../components/common';
import { SearchBar, Slider } from 'react-native-elements';


class CourseSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 10,
    };
  }

  render() {
    return(
      <Card style={{ flex: 1 }}>
        <CardSection>
          <Text>Location</Text>
        </CardSection>

        <SearchBar
          noIcon
          containerStyle={{ backgroundColor: '#FFF', borderTopWidth: 0, borderBottomWidth: 0 }}
          inputStyle={{ borderColor: '#6BD13D', borderWidth: 1, backgroundColor: '#FFF', paddingTop: 12, paddingBottom: 12, height: 45 }}
          onChangeText={(text) => this.setState({ searchTerm: text }) }
          placeholder='Search by location'
        />

        <CardSection>
          <GrayButton onPress={() => console.log('cancel')}>CANCEL</GrayButton>
          <Button onPress={() => console.log('apply')}>APPLY</Button>
        </CardSection>
      </Card>
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

export default CourseSearch;
