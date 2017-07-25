import React from 'react';
import { Text, KeyboardAvoidingView, Modal } from 'react-native';
import { CardSection, Button, GrayButton, Input } from './common';

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
          <CardSection style={cardSectionStyle}>
            <Text style={headerStyle}>New Player</Text>
          </CardSection>

          <CardSection style={{ paddingBottom: 3 }}>
            <Text style={textStyle}>Player Name:</Text>
          </CardSection>

          <CardSection style={{ paddingTop: 0 }}>
            <Input
              placeholder="Ada Lovelace"
              onChangeText={onChangeText}
            />
          </CardSection>

          <CardSection style={buttonPadding}>
            <GrayButton onPress={onDecline}>CANCEL</GrayButton>
            <Button onPress={onAccept} style={buttonMargin}>ADD PLAYER</Button>
          </CardSection>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = {
  headerStyle: {
    fontSize: 21,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)'
  },
  cardSectionStyle: {
    justifyContent: 'flex-start',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonPadding: {
    paddingTop: 60
  },
  buttonMargin: {
    marginLeft: 9
  }
};

export { AddPlayerModal };
