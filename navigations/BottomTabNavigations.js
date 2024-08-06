import { View, Text, Platform, ImageBackgroundBase } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../assets/colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwsome from '@expo/vector-icons/FontAwesome'
import FontAwsome6 from '@expo/vector-icons/FontAwesome6'
import Home from '../src/screens/home'
import products from '../src/screens/products'
import Profile from '../src/screens/profile'
import Wheather from '../src/screens/wheather'
import MyOrders from '../src/screens/orders'


const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
   <Tab.Navigator
   screenOptions={{
    tabBarShowLabel:true,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:Platform.OS === 'ios' ? 70 :40,
        backgroundColor:'white',
        
    },
    
   }}
  
   >
    <Tab.Screen 
    name='Home' 
    component={Home}
    options={{
        tabBarIcon : () => <Ionicons name='home' size={20} color={colors.green}/>,
        tabBarActiveTintColor:'black',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'400'
        },
       tabBarActiveBackgroundColor:colors.lightGreen,
      headerShown:true
       
         
    }}
    
    />

<Tab.Screen 
    name='Products' 
    component={products}
    options={{
        tabBarIcon : () => <FontAwsome name='product-hunt' size={20} color={colors.green} />,
        tabBarActiveTintColor:'black',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'400'
        },
        tabBarActiveBackgroundColor:colors.lightGreen,
        headerShown:true
    }}
    />

<Tab.Screen 
    name='Profile' 
    component={Profile}
    options={{
        tabBarIcon : () => <Ionicons name='person' size={20} color={colors.green}/>,
        tabBarActiveTintColor:'black',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'400'
        },
        tabBarActiveBackgroundColor:colors.lightGreen,
        headerShown:true,
    }}
    />



<Tab.Screen 
    name='Wheather' 
    component={Wheather}
    options={{
        tabBarIcon : () => <FontAwsome6 name='cloud-sun-rain' size={20} color={colors.green}/>,
        tabBarActiveTintColor:'black',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'400'
        },
        tabBarActiveBackgroundColor:colors.lightGreen,
        headerShown:true,
    }}
    />

<Tab.Screen 
    name='My Orders' 
    component={MyOrders}
    options={{
        tabBarIcon : () => <Ionicons name='cart' size={20} color={colors.green}/>,
        tabBarActiveTintColor:'black',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'400'
        },
        tabBarActiveBackgroundColor:colors.lightGreen,
        headerShown:true,
       
    }}
    />

   </Tab.Navigator>
  )
}

export default BottomTabNavigations