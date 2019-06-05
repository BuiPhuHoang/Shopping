import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Home from '../Component/Main/Home'
import Cart from '../Component/Main/Cart'
import Search from '../Component/Main/Search'
import Contact from '../Component/Main/Contact'
import HeaderMain from '../Component/Main/HeaderMain'
import {createAppContainer,createBottomTabNavigator,createDrawerNavigator,createStackNavigator} from 'react-navigation'
// const StackHome =createStackNavigator({
//     Home:{
//         screen: Home
//     }
// })
// const StackCart =createStackNavigator({
//     Cart:{
//         screen: Cart
//     }
// })
// const StackSearch =createStackNavigator({
//     Search:{
//         screen: Search
//     }
// })
// const StackContact =createStackNavigator({
//     Contact:{
//         screen: Contact
//     }
// })

const Bottom= createBottomTabNavigator({
    StackHome:{
        screen: Home
    },
    StackCart:{
        screen: Cart
    },
    StackSearch:{
        screen:Search
    },
    StackContact:{
        screen:Contact
    },
})
export const Drawer =createDrawerNavigator({
    Bottom:{
        screen:Bottom
    },
    HeaderMain
},{
    contentComponent: (props)=>{
        return(
            <View>

            </View>
        )
    }
})
export default createAppContainer(Drawer)