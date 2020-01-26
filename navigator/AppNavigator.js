import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import PlayVideo from '../screen/PlayVideoScreen';
import CategoryNavigator from './CategoryNavigator';

const AppNavigator = createStackNavigator(
  {
    CategoryNavigator: { screen: CategoryNavigator },
    PlayVideo: { screen: PlayVideo }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white'
    }
  }
);

export default AppNavigator;
