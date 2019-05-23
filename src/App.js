import React, { Component } from 'react'
import { Text, View, TextInput, Image, StatusBar } from 'react-native'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Text: ''
        }
    }
    _onChangText = (text) => {
        this.setState({ Text: text })
    }

    render() {
        return (
            <View style={{ backgroundColor: 'green', width: '100%', height: 100 }}>
                <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginTop: 40 }}>
                    <TextInput
                        style={{ padding: 10 }}
                        placeholder='What do you want to buy?'
                        onChangeText={this._onChangText}
                    />

                </View>
            </View>
        );
    }
}