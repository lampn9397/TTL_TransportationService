import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainScreen from './MainScreen';
import UpdateProfileScreen from './UpdateProfileScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

const Stack = createStackNavigator();

const screenOptions = {
  navigator: {
    cardStyle: {
      backgroundColor: 'white',
    },
  },
  MainScreen: {
    headerShown: false,
  },
  UpdateProfileScreen: {},
  ChangePasswordScreen: {},
};

const AccountTab = () => (
  <Stack.Navigator screenOptions={screenOptions.navigator}>
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
