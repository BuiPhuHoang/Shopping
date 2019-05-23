import React,{Component} from 'react'
import HomeScreen from '../Component/HomeScreen/HomeScreen'
import Cart from '../Component/CartAndCheck/Cart'
import CheckAlert from '../Component/CartAndCheck/Check'
import Search from '../Component/SearchAndContact/Search'
import Contact from '../Component/SearchAndContact/Contact'
import {createAppContainer,createBottomTabNavigator,createDrawerNavigator,createStackNavigator} from 'react-navigation'
 
export const Stack = createBottomTabNavigator({
    ManhinhHome:{
        screen: HomeScreen
    },
    ManhinhCart:{
        screen: Cart
    },
    ManhinhSearch:{
        screen: Search
    },
    ManhinhContact:{
        screen: Contact
    }
}) 
export default createAppContainer(Stack);