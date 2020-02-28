import React, { useState, useEffect, useContext } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import CustomCarousel from '../components/CustomCarousel';
import CustomScrollView from '../components/CustomScrollView';
import HeaderBar from '../components/HeaderBar';
import AppContext from '../AppContext';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function(props) {
  const dbServices = useContext(AppContext);

  const [data, setData] = useState({ loaded: false });

  useEffect(() => {
    async function fetchData() {
      const _data = {};
      _data.data1 = await dbServices.getNewSingleMovie();
      _data.data2 = await dbServices.getNewSingleMovie();
      _data.data3 = await dbServices.getNewSeriesMovie();
      _data.data4 = await dbServices.getNewUpdateSeriesMovie();
      _data.loaded = true;
      setData(_data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderBar />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView>
          <CustomCarousel data={data.data1} />
          <CustomScrollView data={data.data2} title="New Movie" />
          <CustomScrollView data={data.data3} title="New TV Series" />
          <CustomScrollView data={data.data4} title="New Update TV Series" />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272424',
    paddingTop: 20,
    flex: 1
  }
});
