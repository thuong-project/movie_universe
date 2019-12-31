import * as React from 'react';
import { View, StyleSheet, Dimensions , Image, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from './color/color'
import HomeTab from './components/HomeTab'


const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homepage', title: 'Trang Chủ' },
    { key: 'movie', title: 'Phim Lẻ' },
    { key:'series', title:'Phim Bộ'},
  ]);

  const renderScene = SceneMap({
    homepage: HomeTab,
    movie: HomeTab,
    series:HomeTab,
  });

  const renderIcon = ({route, focused, color}) => {
    
    switch(route.key){
        case "homepage":
          return focused ? <Image source={require('./assets/images/icon/activeHomeIcon.png')} style={styles.icon}/>
                          :<Image source={require('./assets/images/icon/homeIcon.png')} style={styles.icon}/>
           
        case "movie":
          return focused ? <Image source={require('./assets/images/icon/activeMovieTabIcon.png')} style={styles.icon}/>
                          :<Image source={require('./assets/images/icon/movieTabIcon.png')} style={styles.icon}/>

        case "series":
          return focused ? <Image source={require('./assets/images/icon/activeSeriesMovieIcon.png')} style={styles.icon}/>
                          :<Image source={require('./assets/images/icon/seriesMovieIcon.png')} style={styles.icon}/>
        default:
          return <Image source={require('./assets/images/icon/starIcon.png')} style={styles.icon}/>
          
    }

  };

  const renderLabel = ({route, focused, color}) => (
    <Text style={styles.tabTitle}>{route.title}</Text>
  );

  const renderTabBar = (props) => (
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
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition='bottom'
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  icon:{
   
    height:24,
    width:24
  },
  tabBar:{
    backgroundColor:colors.backgroundTabBar,

  },
  tabTitle:{
    fontSize:12,
    color:'white'
  },
  indicator:{
    backgroundColor:colors.activeIcon_orange
  },
  tabItem:{
    paddingTop:7,
    paddingBottom:0
  }
});