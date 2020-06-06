import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainScreen from './MainScreen';
import UpdateProfileScreen from './UpdateProfileScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import { navigatorScreenOptions } from '../../../utils/constants';

const Stack = createStackNavigator();

const screenOptions = {
  MainScreen: {
    headerShown: false,
  },
  UpdateProfileScreen: {
    title: 'Update profile',
  },
  ChangePasswordScreen: {},
};

const AccountTab = () => (
  <Stack.Navigator screenOptions={navigatorScreenOptions}>
    <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={screenOptions.MainScreen}
    />
    <Stack.Screen
      name="UpdateProfileScreen"
      component={UpdateProfileScreen}
      options={screenOptions.UpdateProfileScreen}
    />
    <Stack.Screen
      name="ChangePasswordScreen"
      component={ChangePasswordScreen}
      options={screenOptions.ChangePasswordScreen}
    />
  </Stack.Navigator>
);

export default AccountTab;
