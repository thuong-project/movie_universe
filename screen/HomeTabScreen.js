import React from 'react';
import { Image, SafeAreaView, StyleSheet, View , Text, StatusBar, ScrollView} from 'react-native';
import CarouselImg from '../assets/images/carousel';         //for test
import CustomCarousel from '../components/CustomCarousel';
import CustomScrollView from '../components/CustomScrollView';
import Nav from '../components/SearchBar';

//data for test
const data1 = Array(10).fill({imageUrl:'https://znews-photo.zadn.vn/w660/Uploaded/spuocaw/2017_07_03/iron_man.jpg'}); 
const data2 = Array(10).fill(CarouselImg.yi); 
const data3 = Array(10).fill(CarouselImg.yummi1); 

export default function HomeTab(props){
  return(
    
     <ScrollView  style={styles.container}>
       <StatusBar barStyle='light-content'></StatusBar>
       <Nav></Nav>
      <CustomCarousel data={data1}/>
      <CustomScrollView data={data2}/>
      <CustomScrollView data={data3}/>
      <CustomScrollView data={data3}/>
      </ScrollView>
    
  )
}
const styles = StyleSheet.create(
  {
    container:{
      backgroundColor:'#272424',
      paddingTop:20
    }
  }
)