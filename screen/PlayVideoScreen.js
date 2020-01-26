import React, { useState, useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import color from '../constant/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

PlayVideo.navigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: color.appBackgroundColor
  },
  headerTitleStyle: {
    color: color.orange
  }
};

const single = {
  localName: 'Localnameeeeeeeeeeeeeeeeeeeee',
  globalName: 'Globalnameeeeeeeeeeeeeeeeeee',
  movieType: 'single',
  poster:
    'https://bilutv.org/upload/images/2018/11/tan-bach-nuong-tu-truyen-ky-2018_1542019807.jpg',
  movieUrl:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2Fmovie%2Favenger_endgame%2Fmovie.mp4?alt=media&token=65e4d38c-31be-4733-925f-5eafde896e10',
  director: ['Pham Van Thuong'],
  actor: ['Pham Van Thuong', 'Pham Anh Kiet', 'Pham Anh Khoa'],
  category: ['Trinh tham', 'Hanh dong', 'Kinh di'],
  release: '2020-1-25',
  content:
    'ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
};
const urla = [
  'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2Fmovie%2Favenger_endgame%2Fmovie.mp4?alt=media&token=65e4d38c-31be-4733-925f-5eafde896e10',
  'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movieData%2FseriesMovie%2Fthe_walking_dead_season10%2Fep1.mp4?alt=media&token=8a34a255-a826-4c47-a7ef-e3313d8514ad'
];
const series = {
  localName: 'Localnameeeeeeeeeeeeeee',
  globalName: 'Globalnameeeeeeeeeeeee',
  movieType: 'series',
  episode: '24/24',
  poster:
    'https://bilutv.org/upload/images/2018/11/tan-bach-nuong-tu-truyen-ky-2018_1542019807.jpg',
  movieUrl: urla,
  director: ['Pham Van Thuong'],
  actor: ['Pham Van Thuong', 'Pham Anh Kiet', 'Pham Anh Khoa'],
  category: ['Trinh tham', 'Hanh dong', 'Kinh di'],
  release: '2020-1-25',
  content:
    'ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
};

export default function PlayVideo(props) {
  //const movie = props.navigation.getParam('movieData') || single;
  const movie = series;
  const [currentEpIndex, setCurrentEpIndex] = useState(0);
  const vdref = useRef(null);

  _handleVideoRef = index => {
    vdref.current.unloadAsync();
    const source = {
      uri: movie.movieType === 'single' ? movie.movieUrl : movie.movieUrl[index]
    };

    vdref.current.loadAsync(source);
  };

  useEffect(() => {
    const source = {
      uri:
        movie.movieType === 'single  '
          ? movie.movieUrl
          : movie.movieUrl[currentEpIndex]
    };

    vdref.current.loadAsync(source);
  }, []);

  return (
    <View style={localStyle.container}>
      <View>
        <Video ref={vdref} style={localStyle.video} useNativeControls={true} />
        {movie.movieType === 'series' && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Episode: </Text>
            {movie.movieUrl.map((item, index, items) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setCurrentEpIndex(index);
                    _handleVideoRef(index);
                  }}
                  style={[
                    localStyle.episodeButton,
                    currentEpIndex === index && {
                      backgroundColor: color.orange
                    }
                  ]}
                >
                  <Text style={{ color: 'white' }}>{index + 1}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
      <ScrollView style={{ paddingTop: 10, flexGrow: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: color.orangeredLabel
          }}
        >
          {movie.localName}
        </Text>
        <View style={localStyle.labelWrapper}>
          <Label>Director: </Label>
          <View style={localStyle.contenLabelWapper}>
            {renderTextAfterLabel(movie.director)}
          </View>
        </View>
        <View style={localStyle.labelWrapper}>
          <Label>Actor: </Label>
          <View style={localStyle.contenLabelWapper}>
            {renderTextAfterLabel(movie.actor)}
          </View>
        </View>
        <View style={localStyle.labelWrapper}>
          <Label>Category: </Label>
          <View style={localStyle.contenLabelWapper}>
            {renderTextAfterLabel(movie.category)}
          </View>
        </View>
        <View style={localStyle.labelWrapper}>
          <Label>Release date: </Label>
          <View style={localStyle.contenLabelWapper}>
            <TextAfterLabel>{movie.release}</TextAfterLabel>
          </View>
        </View>

        <View style={localStyle.labelWrapper}>
          <Label>Content: </Label>
          <TextAfterLabel>{movie.content}</TextAfterLabel>
        </View>
      </ScrollView>
    </View>
  );
}

function Label(props) {
  return (
    <Text style={{ color: 'white', fontSize: 15, width: '40%' }}>
      {props.children}
    </Text>
  );
}

function TextAfterLabel(props) {
  return <Text style={{ color: 'gray' }}>{props.children}</Text>;
}

function renderTextAfterLabel(items) {
  return items ? (
    items.map((item, index, items) => {
      return index === items.length - 1 ? (
        <TextAfterLabel key={index}>{item}</TextAfterLabel>
      ) : (
        <TextAfterLabel key={index}>{item + ', '}</TextAfterLabel>
      );
    })
  ) : (
    <TextAfterLabel>N/A</TextAfterLabel>
  );
}

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackgroundColor
  },
  video: {
    width: '100%',
    height: 200,
    paddingTop: 0
  },
  labelWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5
  },
  episodeButton: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    alignItems: 'center',
    borderRadius: 3
  }
});
