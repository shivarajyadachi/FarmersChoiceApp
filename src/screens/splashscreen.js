import { View, Text, StyleSheet, Image ,StatusBar} from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors'
import farmerchoice from '../../assets/Images/farmerchoice.jpg'


const Splashscreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Image source={farmerchoice} style={styles.logo} />
            <Text style={styles.txt}>Welcome to Farmers choice</Text>
            <View>
                <Text style={styles.txt}>
                    Made with Love from Shivaraj ❤️
                </Text>
            </View>
        </View>
    )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent:'center',
        alignItems:'center'

    },
    logo: {
        height:600,
        width: 400
    },
    txt:{
        color: colors.white,
        margin:10,
        fontSize:20,
        fontWeight:'bold'
    }
})