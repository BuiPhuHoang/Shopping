import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';
import Home from './Component/Main/Home';
import Drawer from './Navigation/Navigation';
import HeaderMain from './Component/Main/HeaderMain';
const { width, height } = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: height / 8 }} />
        <Drawer />
      </View>
    );
  }
}
