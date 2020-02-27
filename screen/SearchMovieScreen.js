import React, { useState, useEffect, useContext, useRef } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  ActivityIndicator
} from 'react-native';
import color from '../constant/color';
import AppContext from '../AppContext';
import { Icon_search, Icon_X, Icon_cancel } from '../constant/icon';
import ListMovieBase from './ListMovieScreenBase';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const PLACEHOLDER = "type movie's name...";

export default function SearchMovieScreen(props) {
  const [searchString, setSearchString] = useState();
  const [data, setData] = useState([]);
  const dbservices = useContext(AppContext);
  const textinputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [infoText, setInfoText] = useState('');

  const searchMovie = async searchString => {
    if (searchString) {
      setLoading(true);
      const dat = await dbservices.searchMovie(searchString);
      setLoading(false);
      setData(dat);
      dat.length === 0 && setInfoText('Not Found');
    }
  };

  return (
    <View style={localStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: '#333333'
        }}
      >
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            height: 40,
            borderColor: 'white',
            marginLeft: 5,
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Icon_search style={{ width: 30, height: 30, marginRight: 10 }} />
          <TextInput
            ref={textinputRef}
            placeholderTextColor="gray"
            placeholder={PLACEHOLDER}
            style={{
              color: 'orange',
              height: 40,
              borderColor: 'white',
              flexGrow: 1,
              width: '50%'
            }}
            onChangeText={text => setSearchString(text)}
            onSubmitEditing={() => searchMovie(searchString)}
            autoFocus={true}
          />
          <TouchableOpacity
            onPress={() => textinputRef.current.clear()}
            style={{ paddingHorizontal: 5 }}
          >
            <Icon_X style={{ width: 13, height: 13 }} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            height: 40,
            backgroundColor: 'orangered',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
            marginLeft: 10
          }}
          onPress={() => searchMovie(searchString)}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator
            style={{
              alignSelf: 'center',
              marginTop: '50%'
            }}
            size="large"
          />
        ) : data.length > 0 ? (
          <ListMovieBase listMovie={data} disableHeaderBar={true} />
        ) : (
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              color: 'gray',
              marginTop: '50%'
            }}
          >
            {infoText}
          </Text>
        )}
      </View>
    </View>
  );
}

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackgroundColor
  }
});
