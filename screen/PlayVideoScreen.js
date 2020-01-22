import React, { useState, useEffect } from 'react';
import { Video } from 'expo-av';
import { StyleSheet,Dimensions, View, Text} from 'react-native';
import color from '../constant/color';
import { ScrollView } from 'react-native-gesture-handler';

PlayVideo.navigationOptions = {
  title:'',
  headerStyle:{
    backgroundColor:color.appBackgroundColor
  },
  headerTitleStyle:{
    color:color.orange
  },

}

export default function PlayVideo(props){
   const data = props.navigation.getParam('movieData');
   return (
    <View style={localStyle.container}>
    <View>
        <Video
          source={{ uri:'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2Fmovie%2Favenger_endgame%2Fmovie.mp4?alt=media&token=65e4d38c-31be-4733-925f-5eafde896e10'}}
          style={localStyle.video}
          useNativeControls={true}

    />
    </View>
    <ScrollView style={{paddingTop:10, flexGrow:1}}>
      <Text style={{fontSize:18, fontWeight:'bold', color:color.orangeredLabel}}>Avenger</Text>
      <View style={localStyle.labelWrapper}>
      <Label>Director: </Label>
      <TextAfterLabel>Pham Van Thuong</TextAfterLabel>
      </View>
      <View style={localStyle.labelWrapper}>
      <Label>Actor: </Label>
      <TextAfterLabel>Pham Van Thuong, John Wick, Ngo kinh</TextAfterLabel>
      </View>
      <View style={localStyle.labelWrapper}>
      <Label>Category: </Label>
      <TextAfterLabel>Action</TextAfterLabel>
      </View>
      <View style={localStyle.labelWrapper}>
      <Label>Release date: </Label>
      <TextAfterLabel>2019</TextAfterLabel>
      </View>
      <View style={localStyle.labelWrapper}>
      <Label>Introduce: </Label>
      <TextAfterLabel>blah,blah,blah,blah,blah,
      blah,blah,blahblahblahblahblahblahblahblah
      blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
      </TextAfterLabel>
      </View>
     
    </ScrollView>
    </View>
    )

}

function Label(props){
  return(
    <Text style={{color: 'white' , fontSize:15, width:'40%'}}>
          {props.children}
    </Text>
  )
}

function TextAfterLabel(props){
  return(
  <Text style={{flexGrow: 1,flex:1, color: color.blueText}}>{props.children}</Text>
  )
}

const localStyle = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:color.appBackgroundColor
  },
  video:{
    width:'100%',
    height:200,
    paddingTop:0
  }
   ,
   labelWrapper:{
     flex:1,
     flexDirection:'row',
     paddingVertical:5,
   }
  });