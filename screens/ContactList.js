import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ListView, TouchableHiglight } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { Spinner } from '../components/common';
import Expo from 'expo';

class ContactList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  _loadContacts = async () => {
  // Ask for permission to query contacts.
  const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
  if (permission.status !== 'granted') {
    // Permission was denied...
    return;
  }

  const contacts = await Expo.Contacts.getContactsAsync({
    fields: [
      Expo.Contacts.THUMBNAIL,
      Expo.Contacts.IMAGE,
    ],
  });

  console.log(contacts);

  let results = [];

  if (contacts.total > 0) {
    contacts.data.map((contact) => {
      results.push({
        name: contact.name,
        image: contact.thumbnail.uri ||' https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        id: contact.id,
      });
    });
  }

  this.setState({
    contacts: results
  });

  };

  componentDidMount() {
    this._loadContacts().done();
  }

  render() {
    if (this.state.contacts === []) {
      return <Spinner />
    }

    return (
      <ScrollView>
        <List>
          {
            this.state.contacts.map((contact, i) => (
              <ListItem
                roundAvatar
                avatar={{uri:contact.image}}
                key={i}
                title={contact.name}
                switchButton={true}
                onSwitch={() => console.log('turned on', contact) }
                switchOnTintColor='#6BD13D'
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ContactList;
