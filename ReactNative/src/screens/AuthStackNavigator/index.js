import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const options = {
    Login: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={options.Login} />
      <Stack.Screen name="Register" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
