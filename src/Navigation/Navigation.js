import React, { Component } from 'react';
import HomeScreen from '../Component/HomeScreen/HomeScreen';
import Cart from '../Component/CartAndCheck/Cart';
import CheckAlert from '../Component/CartAndCheck/Check';
import Search from '../Component/SearchAndContact/Search';
import { Text, View, Image } from 'react-native';
import Contact from '../Component/SearchAndContact/Contact';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Bottom = createBottomTabNavigator({
  ManhinhHome: {
    screen: HomeScreen
  },
  ManhinhCart: {
    screen: Cart
  },
  ManhinhSearch: {
    screen: Search
  },
  ManhinhContact: {
    screen: Contact
  }
});
export const Drawer = createDrawerNavigator(
  {
    Stack: {
      screen: Bottom,
      navigationOptions: {
        title: 'bao stack'
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Homehehe'
      }
    }
  },
  {
    contentComponent: props => {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderColor: 'gray',
                borderWidth: 1.5
              }}
              source={{
                uri:
                  'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg'
              }}
            />
            <Text>{'Hoang Bui'}</Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ManhinhContact');
              }}
            >
              <Text>{'Shop'}</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'gray',
                width: '100%',
                height: 1,
                marginTop: 10
              }}
            />
            <Text>{'Change Information'}</Text>
            <View
              style={{
                backgroundColor: 'gray',
                width: '100%',
                height: 1,
                marginTop: 10
              }}
            />
            <Text>{'Order History'}</Text>
            <View
              style={{
                backgroundColor: 'gray',
                width: '100%',
                height: 1,
                marginTop: 10
              }}
            />
            <Text>{'Sign In'}</Text>
          </View>
        </View>
      );
    }
  }
);
export default createAppContainer(Drawer);
