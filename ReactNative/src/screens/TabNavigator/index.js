import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import HomeTab from './HomeTab';
import AccountTab from './AccountTab';

// Variables
import Colors from '../../utils/colors';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  style: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
  },
  tabStyle: {
    paddingVertical: 5,
  },
  indicatorStyle: {
    top: 0,
    backgroundColor: Colors.BLACK,
  },
  labelStyle: { textTransform: 'none' },
  showIcon: true,
  activeTintColor: Colors.FUTABUS_PRIMARY,
};

const screenOptions = {
  HomeTab: {
    title: 'Home',
    tabBarIcon: ({ color }) => <MIcon name="home" color={color} size={24} />,
  },
  AccountTab: {
    title: 'Account',
    tabBarIcon: ({ color }) => <MIcon name="account-circle" color={color} size={24} />,
  },
};

const TabNavigator = () => (
  <Tab.Navigator tabBarPosition="bottom" swipeEnabled={false} tabBarOptions={tabBarOptions}>
    <Tab.Screen options={screenOptions.HomeTab} name="HomeTab" component={HomeTab} />
    <Tab.Screen options={screenOptions.AccountTab} name="AccountTab" component={AccountTab} />
  </Tab.Navigator>
);

export default TabNavigator;
