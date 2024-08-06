import {Text ,TouchableOpacity} from 'react-native'
import React from 'react'


const Btn = ({bgcolor,textcolor,btnlabel,press,btnwidth}) => {
  return (
    <TouchableOpacity 
    onPress={press}
    style={{backgroundColor:bgcolor , 
    borderRadius:100,
    width:btnwidth,
    paddingVertical:5,
    marginVertical:5,
    marginHorizontal:10,
    alignItems:'center'}}>
        <Text style={{color:textcolor,fontSize:25,fontWeight:'bold'}}>
                {btnlabel}
        </Text>
    </TouchableOpacity>
  )
}

export default Btn