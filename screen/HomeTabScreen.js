import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';
import CustomCarousel from '../components/CustomCarousel';
import CustomScrollView from '../components/CustomScrollView';
import HeaderBar from '../components/HeaderBar';

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
    'ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' +
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' +
    'kkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
  posterHorizontal:
    'http://xemtivi.tv/wp-content/uploads/2019/04/tan-bach-nuong-tu-truyen-ky-6108-backdrop.jpg'
};
const data1 = Array(15).fill(single);

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
    'ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
  posterHorizontal:
    'http://xemtivi.tv/wp-content/uploads/2019/04/tan-bach-nuong-tu-truyen-ky-6108-backdrop.jpg'
};
const data2 = Array(15).fill(series);

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function HomeTab(props) {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <CustomCarousel data={data1} />
          <CustomScrollView data={data1} title="New Movie" />
          <CustomScrollView data={data2} title="New Series Movie" />
          <CustomScrollView data={data2} title="New Update Series Movie" />
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
