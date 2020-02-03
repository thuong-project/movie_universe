import React from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Poster from './PosterCarousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function CustomCarousel(props) {
  const renderItem = (item, index) => {
    return <Poster key={index} movieData={item.item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hot Movie</Text>
      <Carousel
        data={props.data || []}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout="default"
        useScrollView={true}
        loop={true}
        autoplay={true}
        lockScrollWhileSnapping={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 7,
    marginLeft: 10
  }
});

const itemWidth = (WINDOW_WIDTH * 6) / 7;

const sliderWidth = WINDOW_WIDTH;
