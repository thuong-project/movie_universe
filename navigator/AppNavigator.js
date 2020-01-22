import React from 'react';
import CategoryNavigator from './CategoryNavigator';
import PlayVideo from '../screen/PlayVideoScreen';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  CategoryNavigator: {screen:CategoryNavigator,},
  PlayVideo: {screen: PlayVideo,},
},
{
  defaultNavigationOptions:{
    
  }
}
);

export default AppNavigator;