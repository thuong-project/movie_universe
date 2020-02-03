import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from '../constant/color';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default withNavigation(PosterBase);

function PosterBase(props) {
  const { navigation, styleContainer, styleImage, type, movie } = props;
  const styles = StyleSheet.create({
    container: {
      width: styleImage.width || WINDOW_WIDTH / 2 - 6,
      marginLeft: 5
    },
    imageContainer: {
      width: styleImage.width || WINDOW_WIDTH / 2 - 6,
      height: styleImage.height || ((WINDOW_WIDTH / 2 - 6) * 9) / 16
    },
    image: {
      borderRadius: 7,
      width: styleImage.width || WINDOW_WIDTH / 2 - 6,
      height: styleImage.height || ((WINDOW_WIDTH / 2 - 6) * 9) / 16
    },
    localName: {
      color: 'white',
      fontSize: 13
    },
    globalName: {
      color: 'gray',
      fontSize: 12
    },
    episodeContainer: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors.orange,
      minWidth: '30%',
      alignItems: 'center',
      borderRadius: 2
    },
    episodeText: {
      color: 'white',
      fontSize: 12
    }
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PlayVideo', { movieData: movie })}
    >
      <View style={styleContainer || styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: type === 'vertical' ? movie.poster : movie.posterHorizontal
            }}
            style={styles.image}
          />
          {movie.movieType === 'series' && (
            <View style={styles.episodeContainer}>
              <Text style={styles.episodeText}>{movie.episode}</Text>
            </View>
          )}
        </View>

        <Text style={styles.localName} ellipsizeMode="tail" numberOfLines={1}>
          {movie.localName}
        </Text>
        <Text style={styles.globalName} ellipsizeMode="tail" numberOfLines={1}>
          {movie.globalName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
