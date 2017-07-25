import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, Modal } from 'react-native';
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, GrayButton } from '../components/common';
import { Slider } from 'react-native-elements';


const AddPlayerModal = ({ visible, onAccept, onDecline, onChangeText }) => {
  const { containerStyle, textStyle, cardSectionStyle, headerStyle,
          buttonPadding, buttonMargin } = styles;

  return (
    <Modal
      animationType="none"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <KeyboardAvoidingView style={containerStyle} behavior="padding">
        <Card style={{ flex: 1 }}>
          <CardSection style={{ paddingBottom: 0 }}>
            <Text style={[styles.textStyle, { flex: 2}]}>City</Text>
            <Text style={[styles.textStyle, { flex: 1, marginLeft: 6 }]}>State</Text>
          </CardSection>

          <CardSection>
            <Input
              style={{ flex: 2}}
              placeholder="Seattle"
              onChangeText={(text) => this.setState({ city: text })}
            />
            <Input
              style={{ flex: 1, marginLeft: 6}}
              placeholder="WA"
              onChangeText={(text) => this.setState({ state: text })}
            />
          </CardSection>

          <CardSection style={styles.buttonPadding}>
            <GrayButton onPress={() => console.log('cancel')}>CANCEL</GrayButton>
            <Button style={styles.buttonMargin} onPress={() => console.log('apply')}>SEARCH</Button>
          </CardSection>
        </Card>
      </KeyboardAvoidingView>
    </Modal>  
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
  buttonPadding: {
    paddingTop: 60
  },
  buttonMargin: {
    marginLeft: 6
  }
}

export default CourseSearch;
