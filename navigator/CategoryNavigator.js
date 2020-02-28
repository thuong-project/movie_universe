import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Dimensions, Image, Text, Modal } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from '../constant/color';
import ListSingleMovieScreen from '../screen/ListSingleMovieScreen';
import ListSeriesMovieScreen from '../screen/ListSeriesMovieScreen';
import AppContext from '../AppContext';
import { Waiting } from '../constant/icon';
import HomeTabScreen from '../screen/HomeTabScreen';

const initialLayout = { width: Dimensions.get('window').width };

CategoryNavigator.navigationOptions = {
  headerShown: false
};

export default function CategoryNavigator(props) {
  const [loaded, setLoaded] = useState(false);
  const dbServices = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const _data = {};
      _data.data1 = await dbServices.getNewSingleMovie();
      _data.data2 = await dbServices.getNewSingleMovie();
      _data.data3 = await dbServices.getNewSeriesMovie();
      _data.data4 = await dbServices.getNewUpdateSeriesMovie();

      setLoaded(true);
    }
    fetchData();
  }, []);

  const { navigation } = props;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homepage', title: 'Home' },
    { key: 'movie', title: 'Movie' },
    { key: 'series', title: 'TV Series' }
  ]);

  const renderScene = SceneMap({
    homepage: HomeTabScreen,
    movie: ListSingleMovieScreen,
    series: ListSeriesMovieScreen
  });

  const renderIcon = ({ route, focused, color }) => {
    switch (route.key) {
      case 'homepage':
        return focused ? (
          <Image
            source={require('../assets/images/icon/activeHomeIcon.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../assets/images/icon/homeIcon.png')}
            style={styles.icon}
          />
        );

      case 'movie':
        return focused ? (
          <Image
            source={require('../assets/images/icon/activeMovieTabIcon.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../assets/images/icon/movieTabIcon.png')}
            style={styles.icon}
          />
        );

      case 'series':
        return focused ? (
          <Image
            source={require('../assets/images/icon/activeSeriesMovieIcon.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../assets/images/icon/seriesMovieIcon.png')}
            style={styles.icon}
          />
        );
      default:
        return (
          <Image
            source={require('../assets/images/icon/starIcon.png')}
            style={styles.icon}
          />
        );
    }
  };

  const renderLabel = ({ route, focused, color }) => (
    <Text style={styles.tabTitle}>{route.title}</Text>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      renderIcon={renderIcon}
      renderLabel={renderLabel}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tabItem}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <Modal visible={!loaded}>
        <Waiting />
      </Modal>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabBarPosition="bottom"
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  icon: {
    height: 24,
    width: 24
  },
  tabBar: {
    backgroundColor: colors.backgroundTabBar
  },
  tabTitle: {
    fontSize: 12,
    color: 'white'
  },
  indicator: {
    backgroundColor: colors.activeIcon_orange
  },
  tabItem: {
    paddingTop: 7,
    paddingBottom: 0
  }
});
