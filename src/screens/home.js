import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../assets/myStyles'
import { Crops } from '../../assets/Crops'
import { FlatList } from 'react-native-gesture-handler'

const Home = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor:'lightblue', fontSize:15, fontWeight:'bold', textAlign:'center'}}>Select the below crop to identify the Disease and pests</Text>

      <View>
        <FlatList
          data={Crops}
          numColumns={3}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity  onPress={ () => navigation.navigate("CropInformation",{id:item.id})}>
                <View style={styles.CropsView}>
                  <Image source={{ uri: item.image }} style={{ height: 80, width: 80 }} />
                  <Text style={{ color: 'purple', fontSize: 15, fontWeight: 'bold', }}>{item.name}</Text>
                </View>
              </TouchableOpacity>

            );
          }}

        />

      </View>

    </View>
  )
}

export default Home