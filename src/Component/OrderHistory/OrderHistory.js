import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class OrderHistory extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{`man hinh OrderHistory${this.props.myValue}`}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: 'white' }}
                        onPress={() => {
                            this.props.dispatch({ type: 'UP' })
                        }}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>nhay so</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myValue: state.Value
    }
}
export default connect(mapStateToProps)(OrderHistory)
