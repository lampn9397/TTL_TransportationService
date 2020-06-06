import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import Touchable from 'react-native-material-ripple';

const TouchableRipple = (props) => {
  const { children } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Touchable {...props}>{children}</Touchable>;
};

TouchableRipple.propTypes = {
  ...ViewPropTypes,
  disabled: PropTypes.bool,
  rippleColor: PropTypes.string,
  rippleCentered: PropTypes.bool,
  rippleOpacity: PropTypes.number,
  rippleDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  rippleContainerBorderRadius: PropTypes.number,

  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  onLongPress: PropTypes.func,
  // onRippleAnimation: PropTypes.func,
  onPress: PropTypes.func.isRequired,
};

TouchableRipple.defaultProps = {
  disabled: false,
  rippleOpacity: 0.05,
  rippleDuration: 200,
  rippleCentered: false,
  rippleColor: 'rgb(0, 0, 0)',
  rippleContainerBorderRadius: 0,

  onPressIn: () => null,
  onPressOut: () => null,
  onLongPress: () => null,
  // onRippleAnimation: () => null,
};

export default TouchableRipple;
