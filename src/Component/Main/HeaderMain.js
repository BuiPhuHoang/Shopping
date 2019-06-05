import React, {Component} from 'react'
import {Text, View, TextInput,Image, Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')
export default class HeaderMain extends Component{
    render(){
        return(
            <View style={{height:height/8}}>
                <Text>HeaderMain</Text>
            </View>
        )
    }
}