/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

// Stylesheet
import styles from './styles';

export default class ContainerView extends React.PureComponent {
  render = () => {
    const {
      ready,
      children,
      loadingText,
      loadingProps,
      hasLoaderCard,
      style: styleProps,
    } = this.props;
    const style = { container: [styles.common.container], subContainer: [styleProps] };
    if (styleProps instanceof Array) {
      // style.container = styleProps;
      style.subContainer = styleProps;
    }
    if (!ready) {
      // displayStyle = { display: "none" };
      style.subContainer.push({ display: 'none' });
      style.container.push(styles.common.loadingContainer);
      style.container.push(styleProps);
    }
    const { loaderCardBackgroundColor: backgroundColor } = this.props;
    return (
      <SafeAreaView style={style.container}>
        {!ready && (
          <View>
            <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : 20} {...loadingProps} />
            {typeof loadingText === 'string' && <Text>{loadingText}</Text>}
          </View>
        )}
        <View style={style.subContainer}>
          {hasLoaderCard && <View style={[styles.common.amesPosition, { backgroundColor }]} />}
          {children}
        </View>
      </SafeAreaView>
    );
  };
}

ContainerView.propTypes = {
  ready: PropTypes.bool,
  loadingText: PropTypes.string,
  hasLoaderCard: PropTypes.bool,
  children: PropTypes.instanceOf(Object),
  loadingProps: PropTypes.instanceOf(Object),
  loaderCardBackgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ContainerView.defaultProps = {
  ready: true,
  children: null,
  loadingText: '',
  loadingProps: {},
  hasLoaderCard: false,
  style: styles.common.container,
  loaderCardBackgroundColor: undefined,
};
