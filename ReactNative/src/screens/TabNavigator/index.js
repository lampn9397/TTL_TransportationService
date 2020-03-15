import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Blank = () => {
  return null;
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Blank} />
      <Tab.Screen name="Tab2" component={Blank} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
