import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import appindex from './index'
class Login extends React.Component {
  static navigationOptions = {
      title: '登录'
  }
  constructor(props) {
      super(props)
  }
  render () {
    const { navigate } = this.props.navigation
    return (
        <view>
            <Text>登录</Text>
            <Button onPress={() => navigate('DrawerOpen')} title='点击打开侧滑菜单'></Button>
        </view>
    )
  }
}
const slideNavigator = DrawerNavigator({
    mylogin: {
        screen: Login
    },
    other: {
        screen: appindex
    }
}, {
    drawerWidth: 220,
    drawerPosition: 'left',
    contentOptions: {
        initialRouteName: Login,
        activeTintColor: 'red',
        activeBackgroundColor: 'blue',
        inactiveTintColor: '#000',
        inactiveBackgroundColor:'#eee'
    }
})
export default slideNavigator;