import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/redux/store';

import AppNavigator from './src/screens/AppNavigator';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
