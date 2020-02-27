import React from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import PosterBase from './PosterBase';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const posterWidth = WINDOW_WIDTH / 2 - 6;
const posterHeight = ((WINDOW_WIDTH / 2 - 6) * 9) / 16;

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },

  img: {
    margin: 3,
    borderRadius: 7,
    width: WINDOW_WIDTH / 2 - 6,
    height: ((WINDOW_WIDTH / 2 - 6) * 9) / 16
  },
  defaultName: {
    color: 'white',
    fontSize: 13,
    marginLeft: 3
  },
  anotherName: {
    marginLeft: 3,
    color: 'gray',
    fontSize: 12
  },
  itemWrap: {
    width: WINDOW_WIDTH / 2,
    marginBottom: 5
  },
  textWrap: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 3
  },
  header: {
    color: 'white',
    fontSize: 15,
    marginLeft: 7,
    fontWeight: '500',
    flexGrow: 1
  },
  seeMore: {
    color: 'white',
    fontSize: 12
  },
  seeMoreIcon: {
    marginRight: 7,
    marginLeft: 3,
    width: 10,
    height: 10
  }
});

export default withNavigation(CustomScrollView);

function CustomScrollView(props) {
  const { title, navigation } = props;
  const data = props.data || [];
  renderItem = (item, index) => (
    <PosterBase
      movie={item}
      key={index}
      type="horizontal"
      styleImage={{ width: posterWidth, height: posterHeight }}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={styles.header}>{title}</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => renderItem(item, index))}
      </ScrollView>
    </View>
  );
}
/**
  <Text style={styles.seeMore}>see more</Text>
        <Image
          source={require('../assets/images/icon/seeMoreIcon.png')}
          style={styles.seeMoreIcon}
        ></Image>
 */
