import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

// Variables
import ActionTypes from '../redux/AuthModule/action';

const AppNavigator = (props) => {
  const { ready, loggedInUser, checkAutoLogin } = props;

  React.useEffect(() => {
    checkAutoLogin();
  });

  if (ready === false) return null;

  return (
    <React.Fragment>
      {loggedInUser === null && <AuthStackNavigator />}
      {loggedInUser !== null && <AppStackNavigator />}
    </React.Fragment>
  );
};

AppNavigator.propTypes = {
  ready: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.instanceOf(Object),
  checkAutoLogin: PropTypes.func.isRequired,
};

AppNavigator.defaultProps = {
  loggedInUser: null,
};

const mapStateToProps = (state) => state.authReducer;

const mapDispatchToProps = (dispatch) => ({
  checkAutoLogin: () => dispatch({ type: ActionTypes.AUTH_CHECK_ASYNC_STORAGE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
