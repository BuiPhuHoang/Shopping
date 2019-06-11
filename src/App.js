import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView
} from 'react-native';
import Home from './Component/Main/Home';
import Drawer from './Navigation/Navigation';
import HeaderMain from './Component/Main/HeaderMain';
const { width, height } = Dimensions.get('window');
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const defaulValue = {
  Value: 0, HighLight: false, reset: 0
}

const reducer = (state = defaulValue, action) => {
  if (action.type === 'UP') return { Value: state.Value + 1, HighLight: !state.HighLight, reset: 0 }
  if (action.type === 'DOWN') return { Value: state.Value - 1, HighLight: state.HighLight, reset: 0 }
  if (action.type === 'CHANGE_COLOR') return { Value: state.Value, HighLight: !state.HighLight, reset: 0 }
  if (action.type === 'reset') return { Value: state.reset, HighLight: state.HighLight, reset: 0 }
  return state;
}
const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#21AF8B' }}>
          <Drawer />
        </SafeAreaView>
      </Provider>
    );
  }
}
