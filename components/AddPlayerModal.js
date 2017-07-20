import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection, Card, Button, Input } from './common';

const AddPlayerModal = ({ children, visible, onAccept, onDecline, onChangeText }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      animationType="none"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text>Add Player</Text>
          </CardSection>

          <CardSection>
            <Input
              label="Name"
              placeholder="Ada Lovelace"
              value={1}
              onChangeText={onChangeText}
            />
          </CardSection>

          <CardSection>
            <Button onPress={onDecline}>Cancel</Button>
            <Button onPress={onAccept}>Save</Button>
          </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'flex-start',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    alignText: 'flex-start',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 200
  },
};

export { AddPlayerModal };
