import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import VerifyCode from './VerifyCode';
import TabNavigator from '../TabNavigator';
import BookTicket from './BookTicket';
import BookResult from './BookResult';
import SelectBank from './SelectBank';
import UpdateProfile from './UpdateProfile';
import TicketHistoryScreen from './TicketHistoryScreen';
import TicketDetail from './TicketDetail';
import FAQScreen from './FAQScreen';

// Variables
import { navigatorScreenOptions } from '../../utils/constants';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const screenOptions = {
    VerifyCode: {
      headerShown: false,
    },
    TabNavigator: {
      headerShown: false,
    },
    BookTicket: {
      title: 'Ticket booking',
    },
    BookResult: {
      title: 'Ticket information',
    },
    SelectBank: {
      title: 'Select bank',
    },
    TicketHistoryScreen: {
      title: 'Booking tickets',
    },
    FAQScreen: {
      title: 'FAQs',
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

  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      {loggedInUser?.account?.status === 'PENDING' && <Stack.Screen name="VerifyCode" component={VerifyCode} options={screenOptions.VerifyCode} listeners={listeners.VerifyCode} />}
      {loggedInUser?.account?.status === 'UPDATING' && <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={screenOptions.UpdateProfile} listeners={listeners.UpdateProfile} />}
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={screenOptions.TabNavigator} listeners={listeners.TabNavigator} />
      <Stack.Screen name="BookTicket" component={BookTicket} options={screenOptions.BookTicket} listeners={listeners.BookTicket} />
      <Stack.Screen name="BookResult" component={BookResult} options={screenOptions.BookResult} listeners={listeners.BookResult} />
      <Stack.Screen name="SelectBank" component={SelectBank} options={screenOptions.SelectBank} listeners={listeners.SelectBank} />
      <Stack.Screen name="TicketHistoryScreen" component={TicketHistoryScreen} options={screenOptions.TicketHistoryScreen} listeners={listeners.TicketHistoryScreen} />
      <Stack.Screen name="TicketDetail" component={TicketDetail} options={screenOptions.TicketDetail} listeners={listeners.TicketDetail} />
      <Stack.Screen name="FAQScreen" component={FAQScreen} options={screenOptions.FAQScreen} listeners={listeners.FAQScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
