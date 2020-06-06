import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

// Variables
import ActionTypes from '../redux/AuthModule/action';

const AppNavigator = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: ActionTypes.AUTH_CHECK_ASYNC_STORAGE });
  }, []);

  const { ready, loggedInUser } = useSelector((state) => state.authReducer);

  if (ready === false) return null;

  return (
    <React.Fragment>
      {loggedInUser === null && <AuthStackNavigator />}
      {loggedInUser !== null && <AppStackNavigator />}
    </React.Fragment>
  );
};

export default AppNavigator;
