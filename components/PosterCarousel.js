import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default withNavigation(Poster);

function Poster(props) {
  const { navigation } = props;
  const movie = props.movieData;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PlayVideo', { movieData: movie })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: movie.posterHorizontal }}
          style={styles.img}
        ></Image>
        <LinearGradient
          style={styles.wrapText}
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
        >
          <Text style={styles.localName} ellipsizeMode="tail" numberOfLines={1}>
            {movie.localName}
          </Text>
          <Text
            style={styles.globalName}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {movie.globalName}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  img: {
    borderRadius: 7,
    width: (WINDOW_WIDTH * 6) / 7,
    height: (((WINDOW_WIDTH * 6) / 7) * 9) / 16
  },
  imageContainer: {
    width: (WINDOW_WIDTH * 6) / 7,
    height: (((WINDOW_WIDTH * 6) / 7) * 9) / 16
  },
  wrapText: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 3,
    paddingHorizontal: 5,
    width: '100%',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  localName: {
    color: 'white',
    fontSize: 13
  },
  globalName: {
    color: 'gainsboro',
    fontSize: 12
  }
});
