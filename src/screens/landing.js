import { View, Text} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from '../../assets/Background'
import Btn from '../../assets/Btn'

const Landing = (props) => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:400}}>
        <Text style={{ color: 'white', fontSize: 50, marginBottom:1 }}>Lets Start</Text>
        <Text style={{ color: 'white', fontSize: 50, marginBottom:40 }}>Farming</Text>
          <Btn bgcolor='green' textcolor='white' btnlabel='Login' btnwidth={'80%'} press={ () =>props.navigation.navigate("Login")} />
      
          <Btn bgcolor='white' textcolor='blue' btnlabel='SignUp' btnwidth={'80%'} press={ () =>props.navigation.navigate("SignUp")}/>

      </View>
    </Background>

  )
}

export default Landing