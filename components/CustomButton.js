import React from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'

export default function CustomButton(props){

  const styles = StyleSheet.create({
 
    button: {
      alignSelf:'center',
      backgroundColor: props.color || 'orange',
      padding:20,
      borderRadius:30
  
    },
   
    textButton:{
      color:'white',
      fontSize:18,
      alignSelf:'center'
    }
  });

   return (
    
       <TouchableOpacity style={styles.button} onPress={props.onPress}>
         <Text style={styles.textButton}> { props.title } </Text>
       </TouchableOpacity>
       
    )

}

