import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import PlayVideo from '../screen/PlayVideoScreen';
import CategoryNavigator from './CategoryNavigator';
import SearchMovieScreen from '../screen/SearchMovieScreen';
import color from '../constant/color';

const AppNavigator = createStackNavigator(
  {
    CategoryNavigator: { screen: CategoryNavigator },
    PlayVideo: { screen: PlayVideo },
    SearchMovieScreen: {
      screen: SearchMovieScreen,
      navigationOptions: ({ navigation }) => ({
        title: '',
        headerStyle: {
          backgroundColor: color.appBackgroundColor
        },
        headerTitleStyle: {
          color: color.orange
        }
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white'
    }
  }
);

export default AppNavigator;
