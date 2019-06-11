import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput, Dimensions
} from 'react-native';
import Home from '../Component/Main/Home';
import Cart from '../Component/Main/Cart';
import Search from '../Component/Main/Search';
import Contact from '../Component/Main/Contact';
import HeaderMain from '../Component/Main/HeaderMain';
import OrderHistory from '../Component/OrderHistory/OrderHistory';
import UserInfor from '../Component/ChangeInfor/UserInfor';

import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  DrawerActions
} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen')

const Bottom = createBottomTabNavigator({
  Home,
  Cart,
  Search,
  Contact,
  UserInfor,
  OrderHistory
},
  {
    tabBarOptions: {
      activeTintColor: 'red',
      activeBackgroundColor: 'red'
    },

    tabBarComponent: (props) => {
      return (
        <View style={{ height: 50, padding: 15, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home')
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../media/appIcon/home0.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Cart')
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../media/appIcon/cart0.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text>Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Search')
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../media/appIcon/search0.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Contact')
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../media/appIcon/contact0.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text>Contact</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    },
  }
);
const StackDepZai = createStackNavigator(
  {
    Bottom
  },

  {
    defaultNavigationOptions: (props) => ({
      header: (
        <View style={{ flex: 1, height: height / 9, backgroundColor: '#21AF8B', paddingHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.dispatch(DrawerActions.openDrawer())
              }}
            >
              <Image
                source={require('../media/appIcon/ic_menu.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 25, color: 'white' }}>Wearing a Dress</Text>
            <Image
              source={require('../media/appIcon/ic_logo.png')}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <TextInput
            style={{ width: '100%', height: 40, backgroundColor: 'white', padding: 8 }}
            placeholder="What do you want to buy?"
          />
        </View>
      )
    })
  }
);
export const Drawer = createDrawerNavigator(
  {
    StackDepZai: {
      screen: StackDepZai
    }
  },
  {
    drawerWidth: width * 0.6,
    contentComponent: props => {
      return (
        <View style={{ flex: 1, backgroundColor: '#21AF8B' }}>
          <View style={styles.avata}>
            <Image
              source={{
                uri:
                  'https://icdn.dantri.com.vn/thumb_w/640/2018/5/23/net-cuoi-be-gai-9-1527053440039156820618.jpg'
              }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          </View>
          <View style={styles.bodyDrawer}>
            <ScrollView style={{ width: '100%' }}>
              <View style={{ width: '100%' }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('OrderHistory');
                    props.navigation.dispatch(DrawerActions.closeDrawer())

                  }}
                  style={{ marginBottom: 10 }}
                >
                  <View style={{
                    width: '100%', height: height / 15,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffae5',
                    borderRadius: 10
                  }}>
                    <Text>Order History</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%' }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('UserInfor');
                    props.navigation.dispatch(DrawerActions.closeDrawer())
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <View style={{
                    width: '100%', height: height / 15,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffae5',
                    borderRadius: 10
                  }}>
                    <Text>Change Infor</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%' }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ChangeInfor');
                    props.navigation.dispatch(DrawerActions.closeDrawer())
                  }}
                >
                  <View style={{
                    width: '100%', height: height / 15,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffae5',
                    borderRadius: 10
                  }}>
                    <Text>Sing Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
);
export default createAppContainer(Drawer);

const styles = StyleSheet.create({
  avata: { justifyContent: 'center', alignItems: 'center', flex: 3 },
  bodyDrawer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flex: 7
  }
});
