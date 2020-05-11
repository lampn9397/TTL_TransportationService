import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Login from './Login';
import LoginScreen from './LoginScreen';
import Register from './Register';

const Stack = createStackNavigator();

const screenOptions = {
  Login: {
    headerShown: false,
  },
};

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={screenOptions.Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthStackNavigator;
