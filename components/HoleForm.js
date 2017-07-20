import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { Card, CardSection } from './common';

class HoleForm extends Component {

  render() {
    console.log('in render HoleForm. current hole:', this.props.currentHole);
    console.log('in render HoleForm. holeDetails:', this.props.holeDetails);

    const currentHole = this.props.currentHole;
    const holeDetails = this.props.holeDetails;

    return (
      <Card>
        <CardSection>
          <Text>HOLE: {currentHole}</Text>
        </CardSection>

        <CardSection>
          <Text>TEE LENGTH: {holeDetails[currentHole].tee_1_len}</Text>
        </CardSection>

        <CardSection>
          <Text>PAR: {holeDetails[currentHole].tee_1_par}</Text>
        </CardSection>
      </Card>
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
