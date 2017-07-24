import React from 'react';
import { Text, KeyboardAvoidingView, Modal } from 'react-native';
import { CardSection, Card, Button, GrayButton, Input } from './common';

const AddPlayerModal = ({ children, visible, onAccept, onDecline, onChangeText }) => {
  const { containerStyle, textStyle, cardSectionStyle, headerStyle } = styles;

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

          <CardSection>
            <Text style={textStyle}>Player Name:</Text>
          </CardSection>

          <CardSection>
            <Input
              placeholder="Ada Lovelace"
              onChangeText={onChangeText}
            />
          </CardSection>

          <CardSection>
            <GrayButton onPress={onDecline}>CANCEL</GrayButton>
            <Button onPress={onAccept} style={{ marginLeft: 9 }}>ADD PLAYER</Button>
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
  textStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    // marginBottom: 200
  },
};

export { AddPlayerModal };
