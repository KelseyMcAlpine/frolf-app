import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 18,
    flex: 1,
    borderColor: '#6BD13D',
    borderWidth: 1,
  },

  labelStyle: {
    fontSize: 18,
    flex: 1
  },

  containerStyle: {
    height: 40,
    flex: 1,
  }
};

export { Input };
