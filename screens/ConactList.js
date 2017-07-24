import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import Expo from 'expo';

class CourseDetails extends Component {

  componentWillMount() {
    async function showFirstContactAsync() {

    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);

    if (permission.status !== 'granted') {
      console.log('access denied!');
    return;
    }

    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });

    console.log('contacts:', contacts);
    
    if (contacts.total > 0) {
      Alert.alert(
        'Your first contact is...',
        `Name: ${contacts.data[0].name}\n` +
        `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
        `Emails: ${JSON.stringify(contacts.data[0].emails)}`
      );
    }
  }

  render() {
    return (
      <Text></Text>
    );
  }
}

export default connect(mapStateToProps, { createScorecardForm })(CourseDetails);
