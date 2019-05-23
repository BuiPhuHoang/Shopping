import React, { Component } from 'react'
import { Text, View, TextInput, Image, StatusBar } from 'react-native'
import HomeScreen   from './Component/HomeScreen/HomeScreen'
import Stack from './Navigation/Navigation'
export default class App extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'green', width: '100%', height: 100 }}>
               <Stack />
            </View>
        );
    }
}