import React, { useState, useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import color from '../constant/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const WINDOW_HEIGHT = Dimensions.get('window').height;
PlayVideo.navigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: color.appBackgroundColor
  },
  headerTitleStyle: {
    color: color.orange
  }
};

export default function PlayVideo(props) {
  const movie = props.navigation.getParam('movieData');
  const [currentEpIndex, setCurrentEpIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
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
        movie.movieType === 'single'
          ? movie.movieUrl
          : movie.movieUrl[currentEpIndex]
    };

    vdref.current.loadAsync(source);
  }, []);

  return (
    <View style={localStyle.container}>
      <View style={{}}>
        <View style={localStyle.video}>
          <Video
            ref={vdref}
            style={localStyle.video}
            useNativeControls={true}
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <ActivityIndicator
              size="large"
              style={{
                ...localStyle.video,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          )}
        </View>

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
                    setLoaded(false);
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
      <View style={{ flexGrow: 1 }}>
        <ScrollView style={{ paddingTop: 10, flex: 1 }}>
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
            <Label>Country: </Label>
            <View style={localStyle.contenLabelWapper}>
              <TextAfterLabel>{movie.country}</TextAfterLabel>
            </View>
          </View>
          <View style={localStyle.labelWrapper}>
            <Label>Release date: </Label>
            <View style={localStyle.contenLabelWapper}>
              <TextAfterLabel>{movie.release}</TextAfterLabel>
            </View>
          </View>

          <View style={{ width: '100%', paddingBottom: 10 }}>
            <Label>Content: </Label>
            <TextAfterLabel style={{ textAlign: 'auto', paddingHorizontal: 5 }}>
              {movie.content}
            </TextAfterLabel>
          </View>
        </ScrollView>
      </View>
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
  return <Text style={[props.style, { color: 'gray' }]}>{props.children}</Text>;
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
