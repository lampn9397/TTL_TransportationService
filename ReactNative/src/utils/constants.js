import React from 'react';

import Colors from './colors';

export const navigationRef = React.createRef();

export const apiResponse = {
  status: {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
  },
};

export const asyncStorageKey = {
  USER: 'USER',
};

export const navigatorScreenOptions = {
  headerBackTitleVisible: false,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.FUTABUS_PRIMARY,
  },
};
