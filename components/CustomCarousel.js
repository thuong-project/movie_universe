
import React from 'react';
import {StyleSheet, Dimensions,View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

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

const itemWidth = styles.img.width;

const sliderWidth = WINDOW_WIDTH;     


export default function CustomCarousel(props){
    

    const renderItem = (item,index) => {
      
      return (      
          <Image source={item.item} style={styles.img}></Image>
      );
    }

    return (
       <View style={styles.container}>
        <Carousel
              data={props.data || {}}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
              layout='default'
            />
            </View>
    )

}

