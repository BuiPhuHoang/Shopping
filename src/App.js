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
  Value: 0, HighLight: false
}

const reducer = (state = defaulValue, action) => {
  if (action.tyle === 'UP') return { Value: state.Value + 1, HighLight: !state.HighLight }
  if (action.tyle === 'DOWN') return { Value: state.Value - 1, HighLight: state.HighLight }
  if (action.tyle === 'CHANGE_COLOR') return { Value: state.Value, HighLight: !state.HighLight }
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
