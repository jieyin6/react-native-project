import React, { Component } from 'react'
import {StyleSheet, View, Button, Image, Text} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import appIndex from '../pages/index'
import login from '../pages/login'

class HomePage extends React.Component {
    static navigationOptions = {
        title: '首页',
        header: {
            backTitle:''
        }
    }
    constructor(props) {
        super(props)
    }
    render () {
        const {navigate} = this.props.navigation
        return (
           <View style={styles.container}>
               <Text>hello shouye</Text>
               <Button onPress={()=> navigate('Login')} title="点击跳转"></Button>
           </View> 
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Index: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页'
        }
    },
    Login: {
        screen: login,
        navigationOptions: {
            tabBarLabel: '登录'
        }
    }
}, {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
       activeTintColor: 'red',
       inactiveTintColor: 'black',
       style: {
           backgroundColor: '#eee'
       },
       labelStyle: {
           fontSize: 12
       }
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

const SimpleApp = StackNavigator({
    Index: {screen: MainScreenNavigator},
    Login: {screen: login}
})

export default SimpleApp;