import { View, Text, Image, SafeAreaView, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../../assets/myStyles'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { colors } from '../../assets/colors'


const Wheather = () => {
  const [showSearch, toggleSearch] = useState(false);
  const[locations,setLocations] = useState([1,2,3]);
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />

      {/* search section */}
      <SafeAreaView >
        <View style={{ height: '10%' }} >
          <View style={{ backgroundColor: colors.lightYellow, marginHorizontal: 10, borderWidth: .50, borderRadius: 5, height: 30, flexDirection: 'row', justifyContent: 'center' }}
          >
            {
              showSearch ? (
                <TextInput placeholder='search city' placeholderTextColor={'lightblack'} style={{ textAlign: 'center' }}
                />
              )

                : null

            }

            <TouchableOpacity style={{ backgroundColor: colors.lightGreen, borderRadius: 12.5 }}
          onPress={ () => toggleSearch(!showSearch)}
            >
              <MagnifyingGlassIcon size="25" color="grey" />
            </TouchableOpacity>
          </View>
          {
            locations.length>0 && showSearch? (
              <View style={{marginTop:30,position:'absolute', width:'100%' ,backgroundColor:'white' }}>
                 {
                  locations.map( (loc,index) => {
                    return(
                      <TouchableOpacity>
                        <Text>London , United kingdom</Text>
                      </TouchableOpacity>
                    )
                  })
                 }
              </View>

            ):null
          }
        </View>

      </SafeAreaView>



    </View>

  )
}

export default Wheather