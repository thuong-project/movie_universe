
import React from 'react';
import {StyleSheet, Dimensions,View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Poster from './Poster';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;


export default function CustomCarousel(props){
    
    const renderItem = (item,index) => {
      
      return (   
        <Poster 
          key={index}
          movieData={item.item}
        />      
      );
    }

    return (
       <View style={styles.container}>
        <Carousel
              data={props.data}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              layout='default'
              useScrollView={true}
              loop={true}
              autoplay={true}
              lockScrollWhileSnapping={true}
            />
            </View>
    )

}


const styles = StyleSheet.create(
  {
      container:{
          marginTop:0
      }
  }
)

const itemWidth = WINDOW_WIDTH *6/7;

const sliderWidth = WINDOW_WIDTH;     
