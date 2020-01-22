import React from 'react';
import { Dimensions, Image, StyleSheet,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;



export default withNavigation(Poster);


function Poster(props){
    const {navigation} = props;
    const data = props.movieData;
    return (   
        <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayVideo', {movieData:data.movieData})}>
         <Image source={{uri:data.imageUrl}} style={styles.img}></Image>
       </TouchableWithoutFeedback>            
      );
}


const styles = StyleSheet.create(
    {
        container:{
            marginTop:0
        },
        img:{
          borderRadius:7,
          width:WINDOW_WIDTH *6/7,
          height:WINDOW_HEIGHT/4,
          
      }
    }
  )