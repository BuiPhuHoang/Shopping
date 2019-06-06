import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
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
  createStackNavigator
} from 'react-navigation';

// const StackHome = createStackNavigator({
//   Home
// });

// const StackHome = createStackNavigator({
//   Home
// });
// const StackCart = createStackNavigator({
//   Cart
// });
// const StackSearch = createStackNavigator({
//   Search
// });
// const StackContact = createStackNavigator({
//   Contact
// });

const Bottom = createBottomTabNavigator({
  // StackHome: {
  //   screen: StackHome
  // },
  // StackCart: {
  //   screen: StackCart
  // },
  // StackSearch: {
  //   screen: StackSearch
  // },
  // StackContact: {
  //   screen: StackContact
  // }
  Home,
  Cart,
  Search,
  Contact
});
const StackDepZai = createStackNavigator(
  {
    Bottom
  },
  {
    defaultNavigationOptions: () => ({
      header: (
        <View style={{ flex: 1, borderWidth: 1, height: 50 }}>
          <TextInput
            style={{ width: 100, height: 50 }}
            placeholder="ahihi do ngoc"
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
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('');
              }}
            />
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
    flex: 7
  }
});
