import { View, Text, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigation from './DrawerNavigation';

import Splashscreen from '../src/screens/splashscreen';

// Import Screens 
import { ProductsInfo } from '../src/screens/ProductInfo';
import cropInfo from '../src/screens/cropInfo';
import Login from '../src/screens/login';
import Signup from '../src/screens/Signup';
import Landing from '../src/screens/landing';
import ForgotPassword from '../src/screens/forgotpassword';
import NewPassword from '../src/screens/NewPassword';

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000)

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Splash'
      >
        {
          showSplashScreen ? <Stack.Screen name='Splash' component={Splashscreen} options={{ headerShown: false }} />
            : null
        }
        <Stack.Screen name='Landing' component={Landing}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={Signup} options={{ headerShown: false }}  />
        <Stack.Screen name='Home' component={DrawerNavigation} />
        <Stack.Screen name='ProductsInformation' component={ProductsInfo} />
        <Stack.Screen name='CropInformation' component={cropInfo} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigations