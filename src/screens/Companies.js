import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../assets/myStyles'
import { CompanyInformation } from '../../assets/CompanyData'
import { FlatList } from 'react-native-gesture-handler'

const Companies = () => {


    return (
        <View style={styles.container}>
            <FlatList
            numColumns={2}
                data={CompanyInformation}
                renderItem={({ item }) => {
                    return (
                        <View style={{marginVertical:6,backgroundColor:'white',shadowOffset:5,elevation:10,shadowOpacity:5,
                         marginLeft:10,borderRadius:10,height:130,width:180}}>
                         <Text style={{padding:5, fontSize:16, fontWeight:'bold', color:'purple', textAlign:'center'}}>{item.name}</Text>
                                <Image 
                                source={{uri : item.logo}} style={{height:80, width:80, marginBottom:5,marginTop:2,marginLeft:50}}/>
                            
                        </View>

                    )
                }

                }
                keyExtractor={item => item.id}

            />
        </View>
    )
}

export default Companies