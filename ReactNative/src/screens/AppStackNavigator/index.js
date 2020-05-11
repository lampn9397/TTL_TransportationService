import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from '../TabNavigator';
import BookTicket from './BookTicket';

import { navigatorScreenOptions } from '../../utils/constants';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const screenOptions = {
    TabNavigator: {
      headerShown: false,
    },
    BookTicket: {
      title: 'Đặt vé',
      headerBackTitleVisible: false,
    },
  };

  const listeners = {
    TabNavigator: {
      focus: () => StatusBar.setBarStyle('default', true),
    },
    BookTicket: {
      focus: () => StatusBar.setBarStyle('light-content', true),
    },
  };

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={screenOptions.TabNavigator} listeners={listeners.TabNavigator} />
      <Stack.Screen name="BookTicket" component={BookTicket} options={screenOptions.BookTicket} listeners={listeners.BookTicket} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
