import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import HomeTab from './HomeTab';
import AccountTab from './AccountTab';
import Colors from '../../utils/colors';

// Variables
const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  style: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
  },
  indicatorStyle: {
    top: 0,
    backgroundColor: Colors.BLACK,
  },
};

const screenOptions = {
  HomeTab: { title: 'Home' },
  AccountTab: { title: 'Tài khoản' },
};

const TabNavigator = () => (
  <Tab.Navigator tabBarPosition="bottom" swipeEnabled={false} tabBarOptions={tabBarOptions}>
    <Tab.Screen options={screenOptions.HomeTab} name="HomeTab" component={HomeTab} />
    <Tab.Screen options={screenOptions.AccountTab} name="AccountTab" component={AccountTab} />
  </Tab.Navigator>
);

export default TabNavigator;
