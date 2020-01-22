import React from 'react';
import AppNavigator from './navigator/AppNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;