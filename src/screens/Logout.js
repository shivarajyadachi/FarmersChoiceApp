import { View,Text,StyleSheet,Button,Alert} from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'


const Logout = () => {
    const navigation = useNavigation();

    const CreateTwoButtonAlert = () =>
        Alert.alert('Logout', 'Are you sure you want to logout?', [
          {
            text: 'Cancel',
            onPress: () => navigation.navigate('HomeScreen'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('Landing')},
        ]);

       

  return (
    <View style={styles.container}>
        <CreateTwoButtonAlert/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
export default Logout