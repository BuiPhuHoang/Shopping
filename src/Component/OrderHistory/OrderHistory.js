import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class OrderHistory extends Component {
    render() {
        const color = this.props.mychange ? 'red' : 'green'
        return (
            <View style={{ backgroundColor: 'green', flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{this.props.myValue}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                    <View>

                        <TouchableOpacity
                            style={{ backgroundColor: 'white' }}
                            onPress={() => {
                                this.props.dispatch({ type: 'UP' })
                            }}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>TANG</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity
                            style={{ backgroundColor: 'white' }}
                            onPress={() => {

                                this.props.dispatch({ type: 'reset' })
                            }}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color }}>RESET</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity
                            style={{ backgroundColor: 'white' }}
                            onPress={() => {
                                this.props.dispatch({ type: 'DOWN' })
                                this.props.dispatch({ type: 'CHANGE_COLOR' })
                            }}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color }}>GIAM</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myValue: state.Value,
        mychange: state.HighLight,
        reset: state.reset
    }
}
export default connect(mapStateToProps)(OrderHistory)
