import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
export default class Contact extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{ width: 375, height: 400 }}
        >
          <Marker
            title="toa dang odau day"
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            centerOffset={{ x: 0, y: 0.5 }}
          />
          <Marker
            title="toa dang odau day"
            coordinate={{ latitude: 40.78825, longitude: -122.4324 }}
          />
        </MapView>
      </View>
    );
  }
}
