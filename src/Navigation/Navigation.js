import React, { Component } from 'react'
import HomeScreen from '../Component/HomeScreen/HomeScreen'
import Cart from '../Component/CartAndCheck/Cart'
import CheckAlert from '../Component/CartAndCheck/Check'
import Search from '../Component/SearchAndContact/Search'
import Contact from '../Component/SearchAndContact/Contact'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import { createAppContainer, createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import ChangeInfor from '../Component/UserArea/ChangeInfor';

export const Bottom = createBottomTabNavigator({
    ManhinhHome: {
        screen: HomeScreen,
        navigationOptions:{
            title:'HOME'
        } 
    },
    ManhinhCart: {
        screen: Cart
    },
    ManhinhSearch: {
        screen: Search
    },
    ManhinhContact: {
        screen: Contact
    },
    ManhinhChange:{
        screen:ChangeInfor
    }
},
    {
        tabBarOptions: {
            tabStyle: {
                showIcon : 'true',
                justifyContent:'space-between',
                alignItems:'center'
            }
        }
    })
export const Drawer= createDrawerNavigator({
    Bottom:{
        screen:Bottom,
    },
        
    Home:{
        screen: HomeScreen
    },
    Contact:{
        screen: Contact,
    },
},{
    contentComponent:(props)=>{
        return(
            <View style={{flex:1, backgroundColor:'#c0c3c4'}}>
                <View style={{flex:2,justifyContent:'center', alignItems:'center'}}>
                    <Image
                    style={{width:150, height:150, borderRadius:75}}
                    source={{uri:'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg'}}
                    />
                    <Text style={{fontSize:30, color:'green'}}>{'Hoang Bui'}</Text>
                </View>
                <View style={{marginLeft:15,flex:3}}>
                    <TouchableOpacity 
                    onPress={()=>{
                        props.navigation.navigate('Contact')
                    }}
                    >
                    <Text style={{fontSize:20}}>{'Shop'}</Text>
                    </TouchableOpacity>
                    <View style={{width:'100%',height:1, backgroundColor:'gray', marginTop:10}}/>
                    <TouchableOpacity 
                    onPress={()=>{
                        props.navigation.navigate('Home')
                    }}>

                    <Text style={{fontSize:20}}>{'Change Information'}</Text>
                    </TouchableOpacity>
              
                    <View style={{width:'100%',height:1, backgroundColor:'gray', marginTop:10}}/>
                    <Text style={{fontSize:20}}>{'Order History'}</Text>
                    <View style={{width:'100%',height:1, backgroundColor:'gray', marginTop:10}}/>
                    <Text style={{fontSize:20}}>{'Cart'}</Text>
                    <View style={{width:'100%',height:1, backgroundColor:'gray', marginTop:10}}/>
                    <Text style={{fontSize:20}}>{'Sign In'}</Text>
                    <View style={{width:'100%',height:1, backgroundColor:'gray', marginTop:10}}/>
                </View>
            </View>
        )
    }
}
)
export default createAppContainer(Drawer);