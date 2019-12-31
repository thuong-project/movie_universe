import React, { Component } from 'react';
import { ScrollView, Image, Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function ScrollViewTest(){

      const path = './assets/yummi1.png';

      return (
      <SafeAreaView>
        <ScrollView>
          <Image source={require(path)} style={styles.image}/>
          <View style={styles.separate}/>
          <Image source={require(path)} style={styles.image}/>
          <View style={styles.separate}/>
          <Image source={require(path)} style={styles.image}/>
          <View style={styles.separate}/>
          <Image source={require(path)} style={styles.image}/>
          <View style={styles.separate}/>
          <Image source={require(path)} style={styles.image}/>
          <View style={styles.separate}/>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create(
  {
    image:{
      alignSelf:'center',
      borderRadius:100,
      borderWidth:2,
      borderColor:'tomato'
    },
    separate:{
      alignSelf:"center",
      width:200,
      borderBottomWidth:2,
      borderColor:'forestgreen',
     marginVertical:2,
    }
  }
)