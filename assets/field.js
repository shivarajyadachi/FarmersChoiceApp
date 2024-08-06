import {TextInput} from 'react-native'
import React from 'react'

const Field = (props) => {
  return (
    <TextInput
     {...props} 
     style={{borderRadius:100,color:'darkgreen',paddingHorizontal:5, width:'80%',height:35,borderWidth:.15,
      backgroundColor:'rgb(220,220,220)', marginVertical:5}}
    placeholderTextColor='#bebebe'
    >

    </TextInput>
  );
}

export default Field