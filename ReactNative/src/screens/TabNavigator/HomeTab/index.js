import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

// Variables
const styles = StyleSheet.create({
  header: { backgroundColor: 'white' },
});

const screenOptions = {
  navigator: {
    cardStyle: {
      backgroundColor: 'white',
    },
  },
  MainScreen: {
    header: () => <SafeAreaView style={styles.header} />,
  },
};

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions.navigator}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={screenOptions.MainScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;
