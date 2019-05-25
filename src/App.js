import React, { Component } from 'react'
import { Text, View, TextInput, Image, StatusBar } from 'react-native'
import HomeScreen   from './Component/HomeScreen/HomeScreen'
import Drawer from './Navigation/Navigation'
export default class App extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'green', flex:1 }}>
               <Drawer />
            </View>
        );
    }
}