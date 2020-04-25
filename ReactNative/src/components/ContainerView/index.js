import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

const ContainerView = (props) => {
  const { ready, style, children } = props;

  const combinedStyle = {
    container: [],
    subContainer: [],
  };

  if (style instanceof Array) {
    combinedStyle.container = combinedStyle.container.concat(style);
    combinedStyle.subContainer = combinedStyle.subContainer.concat(style);
  } else {
    combinedStyle.container.push(style);
    combinedStyle.subContainer.push(style);
  }

  if (!ready) {
    combinedStyle.subContainer.push({ display: 'none' });
  }

  return (
    <SafeAreaView style={combinedStyle.container}>
      {!ready && <ActivityIndicator size={Platform.select({ ios: 'small', android: 20 })} />}
      <View style={combinedStyle.subContainer}>
        {children}
      </View>
    </SafeAreaView>
  );
};

ContainerView.defaultProps = {
  style: {},
  ready: false,
  children: null,
};

ContainerView.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Object),
  ]),
};

export default ContainerView;
