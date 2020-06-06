import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// Components
import AppNavigator from './src/screens/AppNavigator';

// Variables
import store from './src/redux/store';
import { navigationRef } from './src/utils/constants';

const App = () => (
  <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
