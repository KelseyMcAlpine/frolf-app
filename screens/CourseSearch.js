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
          <Text style={styles.headerStyle}>Location</Text>
        </CardSection>

        <SearchBar
          noIcon
          containerStyle={{ backgroundColor: '#FFF', borderTopWidth: 0, borderBottomWidth: 0 }}
          inputStyle={{ borderColor: 'rgb(76,217,100)', borderWidth: 1, backgroundColor: '#FFF', paddingTop: 12, paddingBottom: 12, height: 45 }}
          onChangeText={(text) => this.setState({ searchTerm: text }) }
          placeholder='Search by location'
        />

      <CardSection style={styles.buttonPadding}>
          <GrayButton onPress={() => console.log('cancel')}>CANCEL</GrayButton>
          <Button style={styles.buttonMargin} onPress={() => console.log('apply')}>APPLY</Button>
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
  buttonPadding: {
    paddingTop: 60
  },
  buttonMargin: {
    marginLeft: 9
  }
}

export default CourseSearch;
