import React, { Component } from 'react'
import { Text, View, TextInput, Image, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('screen')
export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <SpringCollection />
                    <ListOfCateGory />
                    <TopProduct />
                </ScrollView>
            </View>
        );
    }
}

export class SpringCollection extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e0dcc7' }}>
                <View style={{
                    height: height / 3, backgroundColor: 'white', margin: 10,
                    shadowColor: 'green',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 2 }
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 5,
                        opacity: 0.5
                    }}>SPRING COLLECTION </Text>
                    <Swiper style={{ paddingTop: 10 }}>
                        <Image source={require('../../media/temp/fit.jpg')}
                            style={{ width: '100%', height: 200, padding: 5 }}
                        />
                        <Image source={require('../../media/temp/maxi.jpg')}
                            style={{ width: '100%', height: 200 }}
                        />
                        <Image source={require('../../media/temp/midi.jpg')}
                            style={{ width: '100%', height: 200 }}
                        />
                    </Swiper>
                </View>
            </View>
        )
    }
}
export class ListOfCateGory extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e0dcc7' }}>
                <View style={{
                    height: height / 3, backgroundColor: 'white', margin: 10,
                    shadowColor: 'green',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 2 }
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 5,
                        opacity: 0.5
                    }}>List Of CateGory </Text>
                    <Swiper style={{ paddingTop: 10 }}>
                        <Image source={require('../../media/temp/banner.jpg')}
                            style={{ width: '100%', height: 200, padding: 5 }}
                        />
                        <Image source={require('../../media/temp/little.jpg')}
                            style={{ width: '100%', height: 200 }}
                        />
                        <Image source={require('../../media/temp/midi.jpg')}
                            style={{ width: '100%', height: 200 }}
                        />
                    </Swiper>
                </View>
            </View>
        )
    }
}

export class TopProduct extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e0dcc7' }}>
                <View style={{
                    backgroundColor: 'white', margin: 10,
                    shadowColor: 'green',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 2 }
                }}>
                    <Text style={{
                        fontSize: 20,
                        padding: 5,
                        opacity: 0.5
                    }}>Top Product </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10, justifyContent: 'space-between' }} >
                        <View style={{ width: '48%', marginVertical: 10 }}>
                            <Image source={require('../../media/temp/sp1.jpeg')}
                                style={{ width: '100%', height: 250 }}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{'BLACK OFF THE'}</Text>
                                <Text>{'124$'}</Text>
                            </View>
                        </View>
                        <View style={{ width: '48%', marginVertical: 10 }}>
                            <Image source={require('../../media/temp/sp5.jpeg')}
                                style={{ width: '100%', height: 250 }}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{'BLACK OFF THE'}</Text>
                                <Text>{'124$'}</Text>
                            </View>
                        </View>
                        <View style={{ width: '48%', marginVertical: 10 }}>
                            <Image source={require('../../media/temp/sp4.jpeg')}
                                style={{ width: '100%', height: 250 }}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{'BLACK OFF THE'}</Text>
                                <Text>{'124$'}</Text>
                            </View>
                        </View>
                        <View style={{ width: '48%', marginVertical: 10 }} >
                            <Image source={require('../../media/temp/sp3.jpeg')}
                                style={{ width: '100%', height: 250, padding: 5 }}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{'BLACK OFF THE'}</Text>
                                <Text>{'124$'}</Text>
                            </View>
                        </View>
                        <View style={{ width: '48%', marginVertical: 10 }}>
                            <Image source={require('../../media/temp/sp2.jpeg')}
                                style={{ width: '100%', height: 250 }}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{'BLACK OFF THE'}</Text>
                                <Text>{'124$'}</Text>
                            </View>

                        </View>
                        <View style={{ width: '48%', marginVertical: 10 }}>
                            <Image source={require('../../media/temp/sp1.jpeg')}
                                style={{ width: '100%', height: 250 }}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{'BLACK OFF THE'}</Text>
                                <Text>{'124$'}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}