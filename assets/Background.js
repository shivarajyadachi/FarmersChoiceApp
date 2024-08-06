import { ImageBackground, View } from 'react-native'
import React from 'react'

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground  source={require ("./Images/loginBG.jpg")} style={{height:'100%',width:'100%'}}/>
      <View style={{position:'absolute'}}>
        {children}
      </View>
    </View>
  )
}

export default Background