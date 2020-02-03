import React from 'react';
import AppNavigator from './navigator/AppNavigator';
import { createAppContainer } from 'react-navigation';
import AppContext from './AppContext';
import DBServices from './databaseService/DBServices';

const NavigationContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <AppContext.Provider value={DBServices}>
      <NavigationContainer />
    </AppContext.Provider>
  );
}

export default App;
