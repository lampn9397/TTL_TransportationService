import React from 'react';
import { connect } from 'react-redux';

import AuthStackNavigator from '../AuthStackNavigator';
import TabNavigator from '../TabNavigator';

const AppNavigator = (props) => {
  const { user } = props;

  return (
    <>
      {user === null && <AuthStackNavigator />}
      {user !== null && <TabNavigator />}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.loggedInUser,
});

export default connect(mapStateToProps)(AppNavigator);
