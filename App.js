import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_PROJ_ID,
  FIREBASE_STORAGE,
  FIREBASE_SENDER_ID,
} from 'react-native-dotenv';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      projectId: FIREBASE_PROJ_ID,
      storageBucket: FIREBASE_STORAGE,
      messagingSenderId: FIREBASE_SENDER_ID
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} style={{backgroundColor: '#EEEEEE'}}>
        <Router />

      </Provider>
    );
  }
}

export default App;
