import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { CardSection } from './common';

class HoleForm extends Component {

  render() {
    console.log('in render HoleForm. current hole:', this.props.currentHole);
    return (
      <View style={{flex: 1, justifyContent: 'center' }}>
          <Text>HOLE: {this.props.currentHole}</Text>
          <Text>HOLE: {this.props.currentHole}</Text>
          <Text>HOLE: {this.props.currentHole}</Text>
          <Text>HOLE: {this.props.currentHole}</Text>
          <Text>HOLE: {this.props.currentHole}</Text>
          <Text>HOLE: {this.props.currentHole}</Text>
          <Text>HOLE: {this.props.currentHole}</Text>
      </View>
    );
  }
}
          // <Picker
          //   selectedValue={this.props.shift}
          //   style={{ flex: 1 }}
          // >
          //   <Picker.Item label="1" value="1" />
          //   <Picker.Item label="2" value="2" />
          //   <Picker.Item label="3" value="3" />
          //   <Picker.Item label="4" value="4" />
          //   <Picker.Item label="5" value="5" />
          //   <Picker.Item label="6" value="6" />
          //   <Picker.Item label="7" value="7" />
          // </Picker>
          //
          // <Text>Player2</Text>
          // <Picker
          //   selectedValue={this.props.shift}
          //   style={{ flex: 1 }}
          // >
          //   <Picker.Item label="1" value="1" />
          //   <Picker.Item label="2" value="2" />
          //   <Picker.Item label="3" value="3" />
          //   <Picker.Item label="4" value="4" />
          //   <Picker.Item label="5" value="5" />
          //   <Picker.Item label="6" value="6" />
          //   <Picker.Item label="7" value="7" />
          // </Picker>
          //
          // <Text>Player3</Text>
          // <Picker
          //   selectedValue={this.props.shift}
          //   style={{ flex: 1 }}
          // >
          //   <Picker.Item label="1" value="1" />
          //   <Picker.Item label="2" value="2" />
          //   <Picker.Item label="3" value="3" />
          //   <Picker.Item label="4" value="4" />
          //   <Picker.Item label="5" value="5" />
          //   <Picker.Item label="6" value="6" />
          //   <Picker.Item label="7" value="7" />
          // </Picker>
          //
          // <Text>Player4</Text>
          // <Picker
          //   selectedValue={this.props.shift}
          //   style={{ flex: 1 }}
          // >
          //   <Picker.Item label="1" value="1" />
          //   <Picker.Item label="2" value="2" />
          //   <Picker.Item label="3" value="3" />
          //   <Picker.Item label="4" value="4" />
          //   <Picker.Item label="5" value="5" />
          //   <Picker.Item label="6" value="6" />
          //   <Picker.Item label="7" value="7" />
          // </Picker>

export default HoleForm;
