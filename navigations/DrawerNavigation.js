import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import settings from '../src/screens/settings'
import BottomTabNavigations from './BottomTabNavigations'
import Companies from '../src/screens/Companies'
import Logout from '../src/screens/Logout'





const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 250
        }
      }}

    >
      <Drawer.Screen name='HomeScreen' component={BottomTabNavigations} />
      <Drawer.Screen name='Settings' component={settings} />
      <Drawer.Screen name='Companies' component={Companies} />
      <Drawer.Screen name='Logout' component={Logout} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation