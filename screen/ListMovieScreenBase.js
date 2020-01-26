import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import colors from '../constant/color';
import { withNavigation } from 'react-navigation';
import HeaderBar from '../components/HeaderBar';

export default withNavigation(ListMovieScreen);

function ListMovieScreen(props) {
  const listMovie = props.listMovie;
  const { navigation } = props;
  return (
    <View style={localStyle.container}>
      <HeaderBar />
      <View style={localStyle.boxMovie}>
        <FlatList
          data={listMovie}
          renderItem={({ item, index, separators }) =>
            renderItem(item, index, listMovie, navigation)
          }
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

function renderItem(item, index, items, navigation) {
  const movie = item;
  return (
    <TouchableOpacity
      style={localStyle.item_box}
      key={index}
      onPress={() => navigation.navigate('PlayVideo', { movieData: movie })}
    >
      <View style={localStyle.imageContainer}>
        <Image source={{ uri: movie.poster }} style={localStyle.image} />
        {movie.movieType === 'series' && (
          <View style={localStyle.episodeContainer}>
            <Text style={localStyle.episodeText}>{movie.episode}</Text>
          </View>
        )}
      </View>

      <Text style={localStyle.localName} ellipsizeMode="tail" numberOfLines={1}>
        {movie.localName}
      </Text>
      <Text
        style={localStyle.globalName}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {movie.globalName}
      </Text>
    </TouchableOpacity>
  );
}
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272424',
    paddingTop: 20
  },
  boxMovie: {
    flex: 1,
    paddingLeft: '2.5%'
  },
  item_box: {
    marginRight: '2.5%',
    marginTop: 7,
    width: WINDOW_WIDTH * 0.3
  },
  imageContainer: {
    width: WINDOW_WIDTH * 0.3,
    height: (WINDOW_WIDTH * 0.3 * 16) / 10
  },
  image: {
    width: WINDOW_WIDTH * 0.3,
    height: (WINDOW_WIDTH * 0.3 * 16) / 10,
    borderRadius: 5
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
    minWidth: '50%',
    alignItems: 'center',
    borderRadius: 2
  },
  episodeText: {
    color: 'white',
    fontSize: 12
  }
});
