import { View, Text } from 'react-native'
import React from 'react'
import { CropDiseasePests } from '../../assets/CropDiseaseandPests'
import { styles } from '../../assets/myStyles'
import { FlatList } from 'react-native-gesture-handler'


const CropInformation = ({ navigation, route }) => {
    const id = route.params.id
    console.warn(id)
CropDiseasePests.map( (data,index) => {
            return(
                <View key={index}>
                    <Text>{data.id}</Text>
                </View>
            )
 })

    return (
        <View style={{ justifyContent: 'center', margin: 100 }}>
          
        </View>
    )
}

export default CropInformation