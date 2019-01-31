import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import fireBaseConfig from './utils/fireBaseConfig';
import LoginForm from './components/LoginForm';

export class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}


export default App;
